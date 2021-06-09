---
title: 折腾你的老 Mac | 给不支持的 Mac 安装 Big Sur
date: 2021-06-08 15:08:54
cover: https://pic.rmb.bdstatic.com/bjh/8122bfd5ae9ef6ed4adbeac8c51d696f.jpeg
tags:
- Mac
- Big Sur
categories:
- 写BUG日常
- 教程
---
Wi-Fi 问题完美解决。
<!--more-->

{% raw %}<article class="message is-success"><div class="message-body">{% endraw %}
特别鸣谢
- [青瓷妈妈的文章](https://zhuanlan.zhihu.com/p/335640700)
- [sysin 的文章](https://sysin.org/article/install-macos-11-on-unsupported-mac/)

本文基础系统为 macOS Mojave 10.14.6
{% raw %}</div></article>{% endraw %}

## Big Sur 下载

<https://www.applex.net/threads/macos-big-sur-11-4-dmg.94267/>

>感谢该网站的分享。从注册到下载全部免费并且不需要任何什么公众号等。可以直接直链下载。

## 创建启动U盘

### U盘格式化

![打开磁盘工具，点击显示，点击所有设备](https://pic.rmb.bdstatic.com/bjh/728a6b7e3ee2452f8b7674bfeb1a7856.png)
![格式化U盘](https://pic.rmb.bdstatic.com/bjh/1d987ff85f140c73e506f25da7abd488.png)

### 刻录U盘

[下载插件](https://codeload.github.com/barrykn/big-sur-micropatcher/zip/main)

[项目的GitHub](https://github.com/barrykn/big-sur-micropatcher)

打开终端

``` bash BASH
sudo /Applications/Install\ macOS\ Big\ Sur.app/Contents/Resources/createinstallmedia --volume /Volumes/upan
```

将下载好的 big-sur-micropatcher 解压并进入到目录

``` bash BASH
sudo bash micropatcher.sh /Volumes/Install\ macOS\ Big\ Sur
sudo bash install-setvars.sh /Volumes/Install\ macOS\ Big\ Sur
```

## 安装

开机，并按住 option 键。在 SSD 硬盘基础上此时会出现两个图标
![首先从 EFI Boot 启动](https://pic.rmb.bdstatic.com/bjh/e8661852879d020950f9478737049503.jpeg)
会出现黑屏，并且自动关机。此时重新启动电脑并按住 option 键，进入 Install macOS Big Sur 并按照常规进行安装。

## 修复

安装完成之后，进入桌面可能会出现无法识别网络的情况，除非使用的是 Late 2013 iMac 或者更换了 802.11ac 网卡的机型，现在已经可以正常使用。

如果无线网卡无法正常识别工作，打开终端
``` bash BASH
sudo sh /Volumes/Install\ macOS\ Big\ Sur/patch-kexts.sh
```

重新启动无线网卡就正常了。

![附我安装成功的截图](https://pic.rmb.bdstatic.com/bjh/1fc560349e0796a2cfb087062339bc5c.png)