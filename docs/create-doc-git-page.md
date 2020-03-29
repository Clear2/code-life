---
id: gitPage
title: create git page
---

- 把build目录设置为根目录

``` 
git add build 

git commit -m 'init subtree build commit'

git subtree push --prefix dist origin gh-pages
```

- 把GitHub Pages source 设置为 gh-pages branch
