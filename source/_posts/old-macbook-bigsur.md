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

本文基础系统为 macOS Mojave 10.14.6
{% raw %}</div></article>{% endraw %}

## Big Sur 下载

<https://www.applex.net/threads/macos-big-sur-11-4-dmg.94267/>

>感谢该网站的分享。从注册到下载全部免费并且不需要任何什么公众号等。可以直接直链下载。

## 创建新分区（可选）

![](https://pic.rmb.bdstatic.com/bjh/f88b2dc2331bc2ebb68742660164d8de.png)

选择合适分区大小并设置为 APFS 格式。

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