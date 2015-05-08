# Setup

```
git clone git@github.com:Jungllle/ixpass.git
cd ixpass
bundle install
git flow init
# 一直按 enter
git --set-upstream-to develop origin/develop
```

開發請在 `develop` 的分支，或是透過 git flow 開 feature 開發

# Development

```
jekyll serve
```
瀏覽 [http://localhost:4000](http://localhost:4000)

# Deployment

在 `develop` 的分支 commit 完所有修改

```
git co master
# 切換到 master
git merge develop
# 將 develop 的東西 merge 到 master
git push
# 將東西 push to github
git co develop
# 切回 develop branch
```

Release

```
jgd
```
