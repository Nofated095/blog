---
title: 修改 Windows CMD 命令提示符字体
date: 2022-11-30
cover: https://imgsrc.baidu.com/super/pic/item/8c1001e93901213f0488071f11e736d12e2e95be.jpg
tags:
- Windows
categories:
- 写 BUG 日常
- 野生技术协会
toc: true
---
尽管有 Windows Terminal，也要让我的命令提示符变得好看！
<!--more-->

## 前言

2021 年，Microsoft 推出了全新的 Windows Terminal。漂亮的交互 UI 和易用的交互吸收了极多的用户。甚至在 Windows 11 中内置了 Windows Terminal，而最传统的 Windows CMD，即命令提示符的美化淡出了人们的视野。而我的系统是 Windows 10 21H2 LTSC，虽然安装了 Windows Terminal，可我还是更加偏爱~~启动速度极快，响应极快还小巧的~~命令提示符，所以在 2022 年，我重新拾起了它，去进行美化。

![美化前](https://imgsrc.baidu.com/super/pic/item/738b4710b912c8fccb40bf0eb9039245d7882145.jpg)
![美化后](https://imgsrc.baidu.com/super/pic/item/e850352ac65c1038f3cc8701f7119313b17e8947.jpg)

## 步骤

### 单个用户修改

首先下载 [`Microsoft Yahei Mono`](https://github.com/Microsoft/BashOnWindows/files/1362006/Microsoft.YaHei.Mono.zip) 字体，字体源自开源的 WSL。

下载完成后，解压并安装其中的字体。此时再打开命令提示符，在「属性 > 字体」中即可选中并使用，建议将字体大小调高到 18。

![](https://imgsrc.baidu.com/super/pic/item/4bed2e738bd4b31cd693dd78c2d6277f9f2ff842.jpg)

### 永久修改

打开注册表编辑器，在 `HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Console\TrueTypeFont` 中编辑 `936` 字符串，将数值数据修改为 `*Microsoft YaHei Mono` 并保存。

![](https://imgsrc.baidu.com/super/pic/item/5fdf8db1cb134954d6b0a1a7134e9258d0094a43.jpg)

至此便完成了修改。再次打开命令提示符和 Windows PowerShell，在计算机的任何环境中便都是 `*Microsoft YaHei Mono` 字体。
