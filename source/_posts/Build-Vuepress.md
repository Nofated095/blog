---
title: 构建 Vuepress 2.0.0 并部署到 Vercel
date: 2022-01-31 10:00:00
cover: https://pic.rmb.bdstatic.com/bjh/84ba295eb33cdc03389656ce1a34b29f.png
tags:
- Vuepress
- Vercel
categories:
- 写BUG日常
- 野生技术协会
---
帮助每一个懒得跑 vuepress build docs 的人。
<!--more-->

前段时间[主页](https://www.nofated.win)的 [REMS 的官网](https://rems.vercel.app)换到了基于 Vuepress 的页面，并且挂载到了 Vercel 部署，调教好了后终于可以在云端编辑并自动部署，再也不用费劲跑 build 再 deploy 啦！

## 构建 Vuepress

### 构建 package.json

有两种办法，一种比较方便的是按照官网跑一遍指令，再稍加修改，这种方法全程可以根据[文档](https://v2.vuepress.vuejs.org/zh/guide/getting-started.html)来安装 Vuepress。

当然第二种方法就是手搓。这里将详细介绍（

首先，在一个文件夹里，或者仓库里，创建`package.json`，并编辑。

``` json package.json
{
  "name": "vuepress_example",
  "version": "1.0.0",
  "description": "An example of Vuepress",
  "main": "index.ts",
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  },
  "keywords": [],
  "author": "Your Name Here",
  "license": "CC BY-NC-SA 4.0",
  "devDependencies": {
    "vuepress": "^2.0.0-beta.35"
  }
}
```

这里面只安装了 Vuepress 的 2.0.0 版本，没有任何额外的插件和主题。

### 构建 Vuepress 目录

最基本的网站肯定不够我们玩，所以下面我们可以来自定义。请按照下图构建目录和文件。

```
├─ docs
│  ├─ .vuepress
│  │  └─ config.ts
│  └─ README.md
├─ .gitignore
└─ package.json
```

###  自定义文档

编辑 `/docs/.vuepress/config.ts`

``` typescript /docs/.vuepress/config.ts
import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
  // 站点配置
  lang: 'en-US',
  title: 'Hello VuePress',
  description: 'Just playing around',

  // 主题和它的配置
  theme: '@vuepress/theme-default',
  themeConfig: {
    logo: 'https://vuejs.org/images/logo.png',
  },
})
```

当然你也可以使用 JavaScript，但是按官网说法，TypeScript 可以让 VuePress 配置得到更好的类型提示。

如上是一个比较基本的自定义配置，确实很基础，你可以在[官方文档](https://v2.vuepress.vuejs.org/zh/reference/default-theme/config.html)查看更多。

### 一些 Vuepress 实例

[Nofated095/docs](https://github.com/Nofated095/docs)

其文件目录和下面类似

```
├─ docs
│  ├─ .vuepress
│  │  └─ config.ts
│  ├─ category
│  │  └─ README.md
│  │  └─ 1.md
│  │  └─ 2.md
│  └─ README.md
├─ .gitignore
└─ package.json
```

就可以像这样编辑 `/docs/.vuepress/config.ts` 加上 Navbar 和 Side

``` typescript /docs/.vuepress/config.ts
import { defineUserConfig } from ’vuepress‘
import type { DefaultThemeOptions } from ’vuepress‘

export default defineUserConfig<DefaultThemeOptions>({
  // 站点配置
  lang: ’zh-CN‘,
  title: ’A Vuepress Example‘,
  description: ’The Description‘,

  // 主题和它的配置
  theme: ’@vuepress/theme-default‘,
  themeConfig: {
    logo: ’https://pic.rmb.bdstatic.com/bjh/2d44fc3e673283cbbd6f8f97974c0340.png‘,
    head: [
      [’link‘, { rel: ’icon‘, href: ’https://pic.rmb.bdstatic.com/bjh/c0f70aee81771615db8599a0fb93cc3e.png‘ }],
    ],
    navbar: [
      // NavbarItem
      {
        text: ’Home‘,
        link: ’/‘,
      },
      // NavbarGroup
      {
        text: ’Category‘,
        children: [’/category/README.md‘, ’/category/1.md‘, ’/category/2.md‘],
      },
    ],
    sidebar: {
      ’/category/‘: [
        {
          text: ’Category‘,
          children: [’/category/README.md‘, ’/category/1.md‘, ’/category/2.md‘],
        },
      ],
    },
  },
})
```

更多配置详情还请参考 [Vuepress 官方文档](https://v2.vuepress.vuejs.org/zh/guide/configuration.html)，文章里说的仅仅是 Vuepress 中极小的一部分。

##  部署到 Vercel

[登录 Vercel](https://vercel.com/dashboard)，并把你上一步构建好的 Vuepress 上传到 Github 仓库中（如果一开始就在仓库中编辑则无需此操作）

[新建 Vercel 项目](https://vercel.com/new)，Import 你刚刚的仓库，但在 「Configure Project」 中要修改 「Build and Output Settings」。

- 「BUILD COMMAND」 中填入 `yarn docs:build`（当然 `npm docs:build` 也没问题）
- 「OUTPUT DIRECTORY」 中填入 `docs/.vuepress/dist`

点击「Deploy」即可完成部署！
