import * as core from '@actions/core';
import { context, getOctokit } from '@actions/github';
import { exec } from '@actions/exec';
import { codeReview, type CodeReviewProvider } from 'cr-asst';
import 'core-js/es/string/to-well-formed'; // for node 18

const reviewReportIdentifier = '<!-- Commented by mys1024/cr-asst-action. -->';

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
  const include = core.getInput('include') ? core.getInput('include').split(',') : undefined;
  const exclude = core.getInput('exclude') ? core.getInput('exclude').split(',') : undefined;
  const promptFile = core.getInput('prompt-file') ? core.getInput('prompt-file') : undefined;
  const systemPromptFile = core.getInput('system-prompt-file')
    ? core.getInput('system-prompt-file')
    : undefined;
  const disableTools = core.getInput('disable-tools')
    ? core.getInput('disable-tools') === 'true'
    : undefined;
  const maxSteps = core.getInput('max-steps') ? parseInt(core.getInput('max-steps')) : undefined;
  const temperature = core.getInput('temperature')
    ? parseFloat(core.getInput('temperature'))
    : undefined;
  const topP = core.getInput('top-p') ? parseFloat(core.getInput('top-p')) : undefined;
  const topK = core.getInput('top-k') ? parseInt(core.getInput('top-k')) : undefined;
  const outputFile = core.getInput('output-file') ? core.getInput('output-file') : undefined;
  const approvalCheck = core.getInput('approval-check')
    ? core.getInput('approval-check') === 'true'
    : undefined;
  const approvalCheckPrompt = core.getInput('approval-check-prompt')
    ? core.getInput('approval-check-prompt')
    : undefined;
  const approvalCheckPromptFile = core.getInput('approval-check-prompt-file')
    ? core.getInput('approval-check-prompt-file')
    : undefined;

  // print debug info
  core.info('baseRef: ' + baseRef);
  core.info('headRef: ' + headRef);
  core.info('');

  // code review
  const reviewResult = await codeReview({
    baseRef,
    headRef,
    model,
    provider,
    baseUrl,
    apiKey,
    include,
    exclude,
    outputFile,
    promptFile,
    systemPromptFile,
    disableTools,
    maxSteps,
    temperature,
    topP,
    topK,
    print: true,
    approvalCheck: !approvalCheck
      ? false
      : approvalCheckPrompt || approvalCheckPromptFile
        ? {
            prompt: approvalCheckPrompt,
            promptFile: approvalCheckPromptFile,
          }
        : true,
  });

  // octokit
  const octokit = getOctokit(githubToken);

  // find old review reports
  const { data: comments } = await octokit.rest.issues.listComments({
    owner: context.repo.owner,
    repo: context.repo.repo,
    issue_number: issueNumber,
  });
  const oldReports = comments.filter((comment) => comment.body?.startsWith(reviewReportIdentifier));

  // create new review report
  const { data: newReport } = await octokit.rest.issues.createComment({
    owner: context.repo.owner,
    repo: context.repo.repo,
    issue_number: issueNumber,
    body: `${reviewReportIdentifier}\n\n${reviewResult.content}`,
  });
  core.info(`\nReview report generated: ${newReport.html_url}`);

  // update old review reports
  for (const oldReport of oldReports) {
    await octokit.rest.issues.updateComment({
      owner: context.repo.owner,
      repo: context.repo.repo,
      comment_id: oldReport.id,
      body: `${reviewReportIdentifier}\n\n_Review report updated, click [here](${newReport.html_url}) to see the latest review report._`,
    });
  }

  // approval check
  if (reviewResult.approvalCheck) {
    // create review
    await octokit.rest.pulls.createReview({
      owner: context.repo.owner,
      repo: context.repo.repo,
      pull_number: context.payload.pull_request.number,
      event: reviewResult.approvalCheck.approved ? 'APPROVE' : 'REQUEST_CHANGES',
    });
    // fail if not approved
    if (reviewResult.approvalCheck.approved) {
      core.info(`Approval check passed.`);
    } else {
      core.setFailed('Approval check failed.');
    }
  }
}

export async function run(): Promise<void> {
  try {
    await _run();
  } catch (error) {
    console.error(error);
    core.setFailed(error instanceof Error ? error : String(error));
  }
}
