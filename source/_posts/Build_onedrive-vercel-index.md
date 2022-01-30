---
title: 搭建 onedrive-vercel-index
date: 2022-01-08 13:00:00
<!-- cover: https://pic.rmb.bdstatic.com/bjh/04be3c471b1b64391a4624f02ca43ce6.png -->
cover: https://picbed-sigma.vercel.app/Build_onedrive-vercel-index/cover.png
tags:
- OneDrive
categories:
- 写BUG日常
- 教程
---
把 OneDrive 当成网盘/图床
<!--more-->

依稀记得很长时间以前，当时 OneIndex 还特别火，网上有不少教程教如何配合微软 Office 355 教育账号或者是开发者账号来嫖 OneDrive 的储存的。记得当时这种教程遍地开花，各种 Fork 原作者的项目也是琳琅满目。

但是当我想入坑时，原作者已经删库跑路，并且一段时间以后，微软开始重点打压 OneIndex，使得 OneIndex 现在本身不太好用。而且本身 OneIndex 是用 PHP 写的，需要服务器。所以它不可能被我长期接受，因为我没有一台服务器~~（穷得很）~~。

后来在看别人的博客的时候就发现了这个项目。其实作者 [spencerwooo](https://github.com/spencerwooo) 一开始是有一个挂在 CloudFlare Pages 的版本的。我一开始也想做那种，但后来作者又开发了更加简洁的 [onedrive-vercel-index](https://github.com/spencerwooo/onedrive-vercel-index/)，并且部署起来相当方便，理论上能有一个浏览器就可以。

最近博客都开始用手机开机写作，所以博客的图片上传变得很难，所以找到一个方便的图床就很重要，OneDrive 本身加载就不错，配合上 onedrive-vercel-index 就可以凑活着使用。

## 准备工作

- 一台能上网的计算机（或手机）
- 一个 GitHub 账号
- 一个灵活的脑子

## 在 Vercel 上部署

打开 onedrive-vercel-index 的[项目地址](https://github.com/spencerwooo/onedrive-vercel-index/)并 [Fork](https://github.com/spencerwooo/onedrive-vercel-index/fork) 到自己的账号中。

修改你 Fork 的仓库中的 config/site.json 文件，并按照自己的需要进行修改。

``` json 这是我的配置
{
  "icon": "/icons/128.png", //站点图标
  "title": "Nofated's OneDrive", //站点标题
  "baseDirectory": "/", //站点根目录
  "maxItems": 100,
  "googleFontSans": "Inter",
  "googleFontMono": "Fira Mono",
  "googleFontLinks": [
    "https://fonts.loli.net/css2?family=Fira+Mono&family=Inter:wght@400;500;700&display=swap"
  ],
  "footer": "Powered by <a href=\"https://github.com/spencerwooo/onedrive-vercel-index\" target=\"_blank\" rel=\"noopener noreferrer\">onedrive-vercel-index</a>", //页脚信息
  "protectedRoutes": [
    "/🌞 Private folder/u-need-a-password",
    "/🥟 Some test files/Protected route"
  ],
  "email": "mailto:nofated095@outlook.com", //邮箱
  "links": [
    {
      "name": "GitHub",
      "link": "https://github.com/Nofated095"
    },
    {
      "name": "Telegram",
      "link": "https://t.me/Nofated"
    } //右上角链接
  ]
}
```

然后，打开 [Vercel 官网](https://vercel.com)并注册（建议直接 GitHub 登录）。然后点 `New Project`，然后 Import 你刚刚 Fork 的仓库。然后点击 Deploy，仓库就会自动开始部署，一两分钟以后就好了。

## 注册 Redis 数据库

如果你在刚刚 Vercel 部署完成后直接进入网站，大概率会看到 404 的提示。

打开 Marketplace 中的 [Upstash](https://vercel.com/integrations/upstash)，点击 `Add Integration`，然后选中你的账户，再选中你部署的仓库。等待 Upstash 创建 Redis 数据库。

完成创建后，在项目的 `Deployments` 中将项目 `Redeploy`。重新部署完成后，即可访问部署好的网站。

## 链接 OneDrive 账号

打开网站后，你会看到配置页面，只要跟着引导来登录 OneDrive 账号，并储存账户数据即可。就是在登录 OneDrive 账号时，最后会被引导到一个错误页面，域名为 localhost，将地址栏中的地址复制并粘贴到 onedrive-vercel-index 中的对应地方即可。
