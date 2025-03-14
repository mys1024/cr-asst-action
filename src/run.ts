import * as core from '@actions/core';
import { context, getOctokit } from '@actions/github';
import { codeReview } from 'cr-asst';

const reviewCommentIdentifier = '<!-- Commented by mys1024/cr-asst-action. -->';

async function _run(): Promise<void> {
  // ensure the action is triggered by pull request event
  if (!context.payload.pull_request) {
    core.setFailed('This action only works for pull request events.');
    return;
  }

  // get pull request info
  const issueNumber = context.payload.pull_request.number;
  const baseRef = context.payload.pull_request.base.ref;
  const headRef = context.payload.pull_request.head.ref;
  if (typeof baseRef !== 'string') {
    core.setFailed('Failed to get "baseRef" of the pull request.');
    return;
  }
  if (typeof headRef !== 'string') {
    core.setFailed('Failed to get "headRef" of the pull request.');
    return;
  }

  // get inputs
  const githubToken = core.getInput('github-token');
  const model = core.getInput('model');
  const apiKey = core.getInput('api-key');
  const baseUrl = core.getInput('base-url') ? core.getInput('base-url') : undefined;
  const promptFile = core.getInput('prompt-file') || 'en';
  const diffsCmd =
    core.getInput('diffs-cmd') ||
    `git log --no-prefix -p remotes/origin/${baseRef}..remotes/origin/${headRef} -- . :!pnpm-lock.yaml :!package-lock.json :!yarn.lock`;

  // print debug info
  core.info('baseRef: ' + baseRef);
  core.info('headRef: ' + headRef);
  core.info('diffsCmd: ' + diffsCmd);

  // code review
  core.info('\nCode review started...\n');
  const { content: reviewComment } = await codeReview({
    model,
    apiKey,
    baseUrl,
    promptFile,
    diffsCmd,
    print: true,
    printReasoning: true,
    printDebug: true,
  });
  core.info('\nCode review finished.\n');

  // octokit
  const octokit = getOctokit(githubToken);

  // find existing review comment
  const { data: comments } = await octokit.rest.issues.listComments({
    owner: context.repo.owner,
    repo: context.repo.repo,
    issue_number: issueNumber,
  });
  const existingComment = comments.find((comment) =>
    comment.body?.startsWith(reviewCommentIdentifier),
  );

  // create or update review comment
  if (!existingComment) {
    const { data: comment } = await octokit.rest.issues.createComment({
      owner: context.repo.owner,
      repo: context.repo.repo,
      issue_number: issueNumber,
      body: `${reviewCommentIdentifier}\n\n${reviewComment}`,
    });
    core.info(`Review comment added: ${comment.html_url}`);
  } else {
    core.info(`Existing review comment found, comment id: ${existingComment.id}.`);
    const { data: comment } = await octokit.rest.issues.updateComment({
      owner: context.repo.owner,
      repo: context.repo.repo,
      comment_id: existingComment.id,
      body: `${reviewCommentIdentifier}\n\n${reviewComment}`,
    });
    core.info(`Review comment updated: ${comment.html_url}`);
  }
}

export async function run(): Promise<void> {
  try {
    await _run();
  } catch (error) {
    core.setFailed(error instanceof Error ? error : String(error));
  }
}
