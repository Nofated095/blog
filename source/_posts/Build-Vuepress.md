---
title: 构建 VuePress 2.0.0 并部署到 Vercel
date: 2022-01-31
cover: https://pic.rmb.bdstatic.com/bjh/0bcca2ae4fb6934fb9390def048d4740.png
tags:
- VuePress
- Vercel
categories:
- 写BUG日常
- 野生技术协会
toc: true
---
使用 Vercel 来构建最新最热的 VuePress 2.0！
把任务交给 CI，解放你的双手！
<!--more-->

## 使用 vuepress-examples 来构建（推荐）

得益于 Vercel，你只需要点点按钮，就可以直接构建出来一个带有基础功能的 VuePress 文档。

首先找到 [vuepress-examples](https://github.com/Nofated095/vuepress-examples)，拉到最后，你可以根据需要来选择构建方式，以及主题。

分为三个选项，保留 `docs` 目录的传统主题、 `theme-hope` 主题和无 `docs` 目录的选项，点击对应的按钮即可直接跳转到 Vercel 并构建。再根据后面的图片修改构建方式即可。

真的非常简单也非常方便，但是再 `config.ts` 提供的自定义参数并不多，你可以参考[文档](https://v2.vuepress.vuejs.org/zh/guide/getting-started.html)对构建出来的文档做更多的自定义优化。

这里是一个 [demo](https://vuepress-examples.9595095.xyz/)。

## 使用传统方式构建 VuePress

### 构建 package.json

有两种办法，一种比较方便的是按照官网跑一遍指令，再稍加修改，这种方法全程可以根据[文档](https://v2.vuepress.vuejs.org/zh/guide/getting-started.html)来安装 VuePress。

当然第二种方法就是手搓。这里将详细介绍（

首先，在一个文件夹里，或者仓库里，创建`package.json`，并编辑。

``` json package.json
{
  "name": "VuePress_example",
  "version": "1.0.0",
  "description": "An example of VuePress",
  "main": "index.ts",
  "scripts": {
    "docs:dev": "VuePress dev docs",
    "docs:build": "VuePress build docs"
  },
  "keywords": [],
  "author": "Your Name Here",
  "license": "CC BY-NC-SA 4.0",
  "devDependencies": {
    "VuePress": "^2.0.0-beta.35"
  }
}
```

这里面只安装了 VuePress 的 2.0.0 版本，没有任何额外的插件和主题。

### 构建 VuePress 目录

最基本的网站肯定不够我们玩，所以下面我们可以来自定义。请按照下图构建目录和文件。

```
├─ docs
│  ├─ .VuePress
│  │  └─ config.ts
│  └─ README.md
├─ .gitignore
└─ package.json
```

###  自定义文档

编辑 `/docs/.VuePress/config.ts`

``` typescript /docs/.VuePress/config.ts
import { defineUserConfig } from 'VuePress'
import type { DefaultThemeOptions } from 'VuePress'

export default defineUserConfig<DefaultThemeOptions>({
  // 站点配置
  lang: 'en-US',
  title: 'Hello VuePress',
  description: 'Just playing around',

  // 主题和它的配置
  theme: '@VuePress/theme-default',
  themeConfig: {
    logo: 'https://vuejs.org/images/logo.png',
  },
})
```

当然你也可以使用 JavaScript，但是按官网说法，TypeScript 可以让 VuePress 配置得到更好的类型提示。

如上是一个比较基本的自定义配置，确实很基础，你可以在[官方文档](https://v2.VuePress.vuejs.org/zh/reference/default-theme/config.html)查看更多。

### 一些 VuePress 实例

```
├─ docs
│  ├─ .VuePress
│  │  └─ config.ts
│  ├─ category
│  │  └─ README.md
│  │  └─ 1.md
│  │  └─ 2.md
│  └─ README.md
├─ .gitignore
└─ package.json
```

就可以像这样编辑 `/docs/.VuePress/config.ts` 加上 Navbar 和 Side

``` typescript /docs/.VuePress/config.ts
import { defineUserConfig } from ’VuePress‘
import type { DefaultThemeOptions } from ’VuePress‘

export default defineUserConfig<DefaultThemeOptions>({
  // 站点配置
  lang: ’zh-CN‘,
  title: ’A VuePress Example‘,
  description: ’The Description‘,

  // 主题和它的配置
  theme: ’@VuePress/theme-default‘,
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

更多配置详情还请参考 [VuePress 官方文档](https://v2.VuePress.vuejs.org/zh/guide/configuration.html)，文章里说的仅仅是 VuePress 中极小的一部分。

##  部署到 Vercel

[登录 Vercel](https://vercel.com/dashboard)，并把你上一步构建好的 VuePress 上传到 Github 仓库中（如果一开始就在仓库中编辑则无需此操作）

[新建 Vercel 项目](https://vercel.com/new)，Import 你刚刚的仓库，但在 「Configure Project」 中要修改 「Build and Output Settings」。

- 「BUILD COMMAND」 中填入 `yarn docs:build`（当然 `npm run docs:build` 也没问题）
- 「OUTPUT DIRECTORY」 中填入 `docs/.vuepress/dist`

点击「Deploy」即可完成部署！
