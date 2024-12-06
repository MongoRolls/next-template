## next-template

#### 介绍

基于 Next.js 14 实现的一个项目模版，大佬的介绍文章可见： [给上市公司从0到1搭建Next.js14项目](https://juejin.cn/post/7344571324305981503)。

中文开发文档：[https://next.nodejs.cn/docs](https://next.nodejs.cn/docs)
nextjs 官网：[https://nextjs.org/](https://nextjs.org/)

目前集成了

```bash
antd,styled-components,zustand,immer,sass,postcss,tailwindcss,eslint,prettier,commitlint,husky,cross-env等
```

#### 安装教程

git clone 项目到本地即可。

### 抓虫

Next15和antd有冲突的

`Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.`

`TypeError: reactRender is not a function`

解决方式先临时可以降到14

刚好今天12.6 React19了，等等后续的更新

#### 参考资料

[antd issues](https://github.com/ant-design/ant-design/issues?q=is%3Aissue+is%3Aopen+next+)
