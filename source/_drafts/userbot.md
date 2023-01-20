---
title: 从使用者和实用性角度出发谈 User Bot
date: 2023-01-20
# cover: https://pic.rmb.bdstatic.com/bjh/060df44eb7a12a6ae2fcd8f2ebcdbb3e.png
tags:
- Telegram
categories:
- 写 BUG 日常
- 野生技术协会
toc: true
---
我们真的需要一个 Telegram User Bot 吗？
<!--more-->

## 引言

今年 1 月份中下旬，因为原本 LittleSkin 运营组使用的 *Constance* 转发机器人年久失修，转发功能基本寄了，于是 *LittleSkinCommspt* 协助构建了一个新的 *QQ* 和 *Telegram* 之间相互转发的机器人，基于 [Clansty/Q2TG](https://github.com/Clansty/Q2TG)。后来因为种种原因，这个 Q2TG 无法再给社区使用，于是我就主动~~插手~~构建了一个新的 *Q2TG* 实例。

- **1 月 16 日** 注册了一个 `+1` 的 Telegram 账号作为 Q2TG 创建时注册的 User Bot，在部署完成后，我发现此 Telegram 账号立刻被封禁，但是 Q2TG 本身功能并没有发生影响，于是我就没太在意。
- **1 月 18 日** 在正常工作两天后的凌晨，我注意到机器人似乎出了故障，图片和表情均无法转发，这不免让我有些疑惑，于是我重新启动了 Docker 容器，然后就发现转发彻底寄了，一看后台，原来最让人担心的 User Bot 还是寄了，`USER_DEACTIVATED_BAN`，Q2TG 报错，直接导致整个转发寄了。于是早上又尝试了 [`v1`](https://github.com/Clansty/Q2TG/tree/main) 版本，机器人勉强工作，也就继续用了。然后下午又注册了一个新的 `+1` 的 Telegram 账号，简单养了养号后又怀揣着忐忑的心情重新部署了一遍，然后我的 Telegram 账号就又寄了...
>我艹你喵杜叔叔，全家死光光！喵的！很明显这是中了杜叔叔的风控了，浪费了两个号...

## 看看 Issues 叭！

既然封了两次，我是不敢再拿我大号作死，于是我就打算看看 Issues 里面有没有人和我出现了一样的问题。


登录 GitHub，并 Fork [LSPosed/MagiskOnWSA](https://github.com/LSPosed/MagiskOnWSA)。

并根据 [官方教程](https://github.com/LSPosed/MagiskOnWSA#text-guide) 使用 GitHub Actions 构建最新的 WSA。

## 使用传统方式安装 WSA

### 下载 WSA

首先打开 [Microsoft Store - Generation Project](https://store.rg-adguard.net/)，并输入链接。

``` URL
https://www.microsoft.com/store/productId/9P3395VX91NR
```

![](https://pic.rmb.bdstatic.com/bjh/4dbdf37941e34a55547527c34b7d6ecf.png)

![你需要下载对应中央处理器架构的安装文件，如 x86_64 下载所示标红的部分](https://pic.rmb.bdstatic.com/bjh/acf0f836407af725fdb9aaa4033810c3.png)

### 安装 WSA 环境

#### 安装 Hyper-V 相关服务

在 `控制面板 - 程序 - 程序和功能 - 启用或关闭 Windows 功能` 中开启 Hyper-V 相关服务并按照要求重新启动计算机。

![](https://pic.rmb.bdstatic.com/bjh/4d062340eb08a93a83a72241d6c45005.png)

#### 安装 WSA 相关服务

将几个小包安装好，留下大包。

使用管理员打开 Windows 终端或者 Microsoft PowerShell。

```ps PowerShell
Add-AppxPackage C:\Path\to\MicrosoftCorporationII.WindowsSubsystemForAndroid_2203.40000.3.0_neutral_~_8wekyb3d8bbwe.Msixbundle
```

![](https://pic.rmb.bdstatic.com/bjh/be319517eac93279461b1a6e90a52d15.png)
![](https://pic.rmb.bdstatic.com/bjh/478b898201d51c3612ed5c5041ab11c4.png)

如果安装正确，你应当可以在开始菜单中找到 WSA。

![](https://pic.rmb.bdstatic.com/bjh/6b1741f8f6551ae2128ab97c0979880c.png)

至此，WSA 安装完成。它具有最基础的 Android 功能。

### 使用 Android 调试桥 (adb) 调试 WSA

在 WSA 的设置中打开`开发人员模式`，这样你可以对它进行基础的 adb 调试。

![记录下你查看到的 adb 调试链接地址](https://pic.rmb.bdstatic.com/bjh/2ba5bf5fc08a6884e2b9b943a9c220e8.png)

如果你不清楚 Android 调试桥 (adb)，你可以在[这里](https://developer.android.com/studio/command-line/adb)查看更多有关于此的文章。

在这里你可以下载到最新的 [Android 调试桥 (adb) 工具](https://developer.android.com/studio/releases/platform-tools)。

```bash ADB
# 链接 WSA
adb connect 127.0.0.1:58526
# 其中 127.0.0.1:58526 是在 WSA 设置项中看到的 IP

# 安装 APK
# 连接成功之后，就能用下面命令来安装 APK 了
adb install C:\path\to\package.apk
```
