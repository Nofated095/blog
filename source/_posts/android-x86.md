---
title: 虚拟机安装 android-x86
date: 2020-10-01 17:00:00
cover: https://pic.rmb.bdstatic.com/bjh/38969b26e37f770d59195c27d73ddfcb.jpeg
tags:
- android
- 虚拟机
categories:
- 写BUG日常
- 教程
---
看到我的 Parallels Desktop ，发现好久好久没有用过了，今天刚好趁着国庆捣鼓亿下（但实际文章是国庆假期后月考完了写的）。
<!--more-->
{% raw %}<article class="message is-success"><div class="message-body">{% endraw %}
关于虚拟机的使用、创建我就直接跳过了。如果你不知道去哪里寻找需要的 android-x86，你可以点击[清华大学开源软件镜像站下载](https://mirrors.tuna.tsinghua.edu.cn) 或 [北京外国语大学开源软件镜像站下载](https://mirrors.bfsu.edu.cn) 右侧的`获取下载链接`，选择`操作系统`，再选择 `Android-x86`，然后你就可以选择适合你的版本进行下载。不同的版本可能操作方式不同
{% raw %}</div></article>{% endraw %}

## 安装

![打开你的虚拟机软件，创建新的虚拟机并载入刚刚下载的ISO镜像，开机](https://pic.rmb.bdstatic.com/bjh/a60eb584d2b95e3837d06dcee64b0d70.png)
![按 TAP](https://pic.rmb.bdstatic.com/bjh/9d154ae657f448943a8c9d5ff1b24922.png)
![在最后面加 INSTALL=1 并回车](https://pic.rmb.bdstatic.com/bjh/6beb1b556f45693562a68df4bae1507a.png)
![选第一个](https://pic.rmb.bdstatic.com/bjh/4d80b5cb3ad070d0f32e256d5e0d2833.png)
![传统引导选择 NO，若不是，则反之](https://pic.rmb.bdstatic.com/bjh/fea208fb4c56f9968a5d6244c25609b3.png)
![选择 New，并回车](https://pic.rmb.bdstatic.com/bjh/f29f7a12aa4cdf20133e2d50f3a56a19.png)
![选择 Primary，并回车](https://pic.rmb.bdstatic.com/bjh/8b28c0375801b0bfb4b24b80528a7759.png)
![空间大小选默认，回车](https://pic.rmb.bdstatic.com/bjh/388ae95b0b4ae1c01f08b4c3911d38c3.png)
![选择 Bootable，回车](https://pic.rmb.bdstatic.com/bjh/e1a480439efc216ebfe1cbbb85b1fe4a.png)
![选择 Write，回车](https://pic.rmb.bdstatic.com/bjh/6c632d5f9ec38217a901bc01c019325b.png)
![输入 yes 确认，回车](https://pic.rmb.bdstatic.com/bjh/d21ab94f358733d437b822289e5d01e8.png)
![选择 Quit，回车](https://pic.rmb.bdstatic.com/bjh/e2c370ddaa0f1d79cef397175b9762f7.png)
![选用第一个没格式化的，回车](https://pic.rmb.bdstatic.com/bjh/73cc0b145feb51087d19110c9ed0ba07.png)
![格式选 ext4，回车](https://pic.rmb.bdstatic.com/bjh/8b9b7694076bf2b86966dd9b69c73e31.png)
![确认格式化并回车](https://pic.rmb.bdstatic.com/bjh/c3337c2548f01c2a939e07900e5f124e.png)
![等待格式化](https://pic.rmb.bdstatic.com/bjh/2ba4ddb50b155121a7a5312b5f10dbf9.png)
![建议安装](https://pic.rmb.bdstatic.com/bjh/2f5e1ff3be8238397a4710286a9543bd.png)
![是否将/system目录设为可读写，毕竟只是玩玩，我就不设置了]https://pic.rmb.bdstatic.com/bjh/a108e8d8d64fe8d22d3f619d5114bbf6.png)
![等待写入](https://pic.rmb.bdstatic.com/bjh/7b005e34aa3875210f834be5bc71df39.png)
![选择 Reboot，回车](https://pic.rmb.bdstatic.com/bjh/beba012ffdccb833a75c01361cb8f989.png)
![可以回车实验性进系统，如果没有开机LOGO往下看](https://pic.rmb.bdstatic.com/bjh/da67e97fc803fe5265c8c58bdf92a23f.png)
![选择第二个选项，回车](https://pic.rmb.bdstatic.com/bjh/5dafea468bdbd4faf320cea0c5124885.png)
![滚完代码后回车](https://pic.rmb.bdstatic.com/bjh/8197687a94f49eeab0015958c7c6ef91.png)
![输入 mount –o remount,rw /mnt 后回车](https://pic.rmb.bdstatic.com/bjh/cc88bb757e6474b7ec1baca25a01fda7.png)
![按I键进入编辑模式，把第一个title下面的 root=/dev/ram0 改成 nomodeset_root=/dev/ram0，然后重启](https://pic.rmb.bdstatic.com/bjh/4c92f6bf9e73d91c26741e449d09bc44.png)
![看到LOGO代表安装成功，耐心等待进系统](https://pic.rmb.bdstatic.com/bjh/4c92f6bf9e73d91c26741e449d09bc44.png)
![我选的简体中文](https://pic.rmb.bdstatic.com/bjh/7fe21556d79b5a1adb5ef3fe251097b3.png)
![同意协议](https://pic.rmb.bdstatic.com/bjh/ddd2e81f5309d730aa8def9ef673b45c.png)
![整个安装过程结束](https://pic.rmb.bdstatic.com/bjh/bee7256ea68d7b8be8417c6688333a24.png)