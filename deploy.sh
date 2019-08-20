#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

npm install

# 生成静态文件
npm run build

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f https://${access_token}@github.com/im/vuepress-theme-postline.git master:gh-pages

cd -