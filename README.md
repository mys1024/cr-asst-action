# cr-asst-action

[![license](https://img.shields.io/github/license/mys1024/cr-asst-action)](./LICENSE)
[![version](https://img.shields.io/github/package-json/v/mys1024/cr-asst-action)](https://github.com/mys1024/cr-asst-action/releases)
[![workflow-ci](https://img.shields.io/github/actions/workflow/status/mys1024/cr-asst-action/ci.yml?label=ci)](https://github.com/mys1024/cr-asst-action/actions/workflows/ci.yml)
[![workflow-release](https://img.shields.io/github/actions/workflow/status/mys1024/cr-asst-action/release.yml?label=release)](https://github.com/mys1024/cr-asst-action/actions/workflows/release.yml)

An action powered by **[cr-asst](https://github.com/mys1024/cr-asst)** that reviews your pull requests with AI assistants.

## Usage

1. Create a workflow file `.github/workflows/review-pr.yml` with the following content:

   ```yml
   name: Review PR

   on:
     pull_request:
       types:
         - opened
         - synchronize
       branches:
         - main

   jobs:
     review:
       runs-on: ubuntu-latest

       steps:
         - name: Checkout repository
           uses: actions/checkout@v4
           with:
             fetch-depth: 0

         - name: Review
           uses: mys1024/cr-asst-action@v1
           with:
             github-token: ${{ secrets.GITHUB_TOKEN }} # required
             api-key: ${{ secrets.CR_API_KEY }} # required
             model: gpt-4 # required
             base-url: https://api.example.com/v1 #optional
   ```

   Note: see [action.yml](./action.yml) for more details about inputs.

2. Set the secret `CR_API_KEY` in your repository settings.

3. Set the setting `Workflow permissions` to `Read and write permissions` in your repository settings.

## License

[MIT](./LICENSE) License &copy; 2025-PRESENT mys1024
