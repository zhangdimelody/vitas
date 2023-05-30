#!/usr/bin/env sh

set -e

npm run docs:build

cd docs/.vuepress/dist

git init
git add -A
git commit -m 'chore: deploy'

# 如果发布到 https://<USERNAME>.github.io/<REPO> 这里做出对应的替换
# git push -u origin-github master:gh-pages

cd -