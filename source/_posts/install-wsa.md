---
title: Windows 11 安装 WSA
date: 2022-05-31
cover: https://pic.rmb.bdstatic.com/bjh/060df44eb7a12a6ae2fcd8f2ebcdbb3e.png
tags:
- Android
- Windows
- 虚拟机
- 下载
categories:
- 写BUG日常
- 野生技术协会
toc: true
---
用简单的方式，在计算机上运行 Android 程序。
<!--more-->

## 使用 GitHub Actions 构建（推荐）

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
