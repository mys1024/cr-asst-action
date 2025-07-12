import { inspect } from 'node:util';
import * as core from '@actions/core';
import { context, getOctokit } from '@actions/github';
import { exec } from '@actions/exec';
import { codeReview, type CodeReviewProvider } from 'cr-asst';
import 'core-js/es/string/to-well-formed'; // for node 18

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

  // checkout branches to local
  await exec('git', ['switch', '-C', baseRef, `origin/${baseRef}`], { silent: true });
  await exec('git', ['switch', '-C', headRef, `origin/${headRef}`], { silent: true });

  // get inputs
  const githubToken = core.getInput('github-token');
  const model = core.getInput('model');
  const provider = core.getInput('provider')
    ? (core.getInput('provider') as CodeReviewProvider)
    : undefined;
  const baseUrl = core.getInput('base-url') ? core.getInput('base-url') : undefined;
  const apiKey = core.getInput('api-key');
  const exclude = core.getInput('exclude') ? core.getInput('exclude').split(',') : undefined;
  const promptFile = core.getInput('prompt-file') ? core.getInput('prompt-file') : undefined;
  const systemPromptFile = core.getInput('system-prompt-file')
    ? core.getInput('system-prompt-file')
    : undefined;
  const disableTools = core.getInput('disable-tools')
    ? core.getInput('disable-tools') === 'true'
    : undefined;
  const maxSteps = core.getInput('max-steps') ? parseInt(core.getInput('max-steps')) : undefined;
  const outputFile = core.getInput('output-file') ? core.getInput('output-file') : undefined;

  // print debug info
  core.info('baseRef: ' + baseRef);
  core.info('headRef: ' + headRef);

  // code review
  core.info('\nCode review started...\n');
  const { content: reviewComment } = await codeReview({
    baseRef,
    headRef,
    model,
    provider,
    baseUrl,
    apiKey,
    exclude,
    outputFile,
    promptFile,
    systemPromptFile,
    disableTools,
    maxSteps,
    print: true,
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
    core.setFailed(inspect(error instanceof Error ? error : String(error)));
  }
}
