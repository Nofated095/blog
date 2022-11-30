---
title: 美化 Windows CMD 命令提示符
date: 2022-11-30
cover: https://pic8.58cdn.com.cn/nowater/webim/big/n_v2947ea235a358482a97ac2cad1e1a990e.png
tags:
- Windows
categories:
- 写 BUG 日常
- 教程
---
尽管有 Windows Terminal，也要让我的命令提示符变得好看！
<!--more-->

## 前言

2021 年，Microsoft 推出了全新的 Windows Terminal。漂亮的交互 UI 和易用的交互吸收了极多的用户。甚至在 Windows 11 中内置了 Windows Terminal，而最传统的 Windows CMD，即命令提示符的美化淡出了人们的视野。而我的系统是 Windows 10 21H2 LTSC，虽然安装了 Windows Terminal，可我还是更加偏爱~~启动速度极快，响应极快还小巧的~~命令提示符，所以在 2022 年，我重新拾起了它，去进行美化。

![美化前](https://pic5.58cdn.com.cn/nowater/webim/big/n_v274212ca2986d482283b8499501292a79.png)
![美化后](https://pic5.58cdn.com.cn/nowater/webim/big/n_v22e7b9f60710f4d7d91adaf91299ca835.png)

## 步骤

### 单个用户修改

首先下载 [`Microsoft Yahei Mono`](https://github.com/Microsoft/BashOnWindows/files/1362006/Microsoft.YaHei.Mono.zip) 字体，字体源自开源的 WSL。

下载完成后，解压并安装其中的字体。此时再打开命令提示符，在「属性 > 字体」中即可选中并使用，建议将字体大小调高到 18。

![](https://pic5.58cdn.com.cn/nowater/webim/big/n_v26c4546b7fa014f4bb32dc70f6da6e550.png)

### 永久修改

打开注册表编辑器，在 `HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Console\TrueTypeFont` 中编辑 `936` 字符串，将数值数据修改为 `*Microsoft YaHei Mono` 并保存。

![](https://pic5.58cdn.com.cn/nowater/webim/big/n_v283dd8142946c45b387fb6f8a35c9faef.png)

至此便完成了修改。再次打开命令提示符和 Windows PowerShell，在计算机的任何环境中便都是 `*Microsoft YaHei Mono` 字体。
