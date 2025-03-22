# cr-asst-action

[![license](https://img.shields.io/github/license/mys1024/cr-asst-action)](./LICENSE)
[![version](https://img.shields.io/github/package-json/v/mys1024/cr-asst-action)](https://github.com/mys1024/cr-asst-action/releases)
[![workflow-ci](https://img.shields.io/github/actions/workflow/status/mys1024/cr-asst-action/ci.yml?label=ci)](https://github.com/mys1024/cr-asst-action/actions/workflows/ci.yml)
[![workflow-release](https://img.shields.io/github/actions/workflow/status/mys1024/cr-asst-action/release.yml?label=release)](https://github.com/mys1024/cr-asst-action/actions/workflows/release.yml)

[English](./README.md) | 中文

这个 Action 基于 **[cr-asst](https://github.com/mys1024/cr-asst)**，实现使用 AI 对合并请求进行评审。

## 用法

1. 创建一个工作流文件 `.github/workflows/review-pr.yml`，包含以下内容：

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
             github-token: ${{ secrets.GITHUB_TOKEN }} # 必需
             api-key: ${{ secrets.CR_API_KEY }} # 必需
             model: gpt-4 # 必需
             base-url: https://api.example.com/v1 # 可选
   ```

   注: 参数细节可以参考 [action.yml](./action.yml)。

2. 在仓库设置中配置密钥 `CR_API_KEY`。

3. 在仓库设置中将配置项 `Workflow permissions` 设置为 `Read and write permissions`。

## 例子

可以点[这里](https://github.com/mys1024/cr-asst-action/pull/3#issuecomment-2745088468)查看例子。

## 国内镜像仓库

如果在国内使用与 Github Actions 兼容的自托管 CI/CD 系统（如 Gitea Actions），为了避免网络问题，可以引用在 Gitee 上的这个[镜像仓库](https://gitee.com/mys1024/cr-asst-action)。

## License

[MIT](./LICENSE) License &copy; 2025-PRESENT mys1024
