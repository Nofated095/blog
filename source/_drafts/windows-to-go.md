---
title: Windows To Go 使用心得
date: 2022-03-13
# cover: https://pic.rmb.bdstatic.com/bjh/b091de2c1d546bbf6311fe5ca744014a.png
cover: https://xgjalbum.oss-cn-hangzhou.aliyuncs.com/43cb7c243eab49d55b481gb8/51E7D6D4-A84C-11ED-B3E2-C03EBA168291.png?x-oss-process=image/format,webp
tags:
- Windows
- 总结
categories:
- 写 BUG 日常
- 野生技术协会
toc: true
---
折腾 Windows To Go 路上踩过的坑。
<!--more-->
> 本人为 Windows To Go 轻度使用用户，也不是折腾类型的人，下面内容仅供参考。

## 硬盘

我觉得 Windows To Go 最重要的部分就是硬盘的选择，并不是所有的储存设备都能跑 Windows To Go。如果你没有读写效率比较高的固态盘那我并不建议你去制作并使用 Windows To Go——卡得不成样子，非常让人难受，所以不要指望你那小小的移动硬盘能用柔弱的身躯带 Windows To Go。比如我，目前使用的是联想（thinkplus）移动固态闪存优盘，系统整体使用感觉非常好，制作起来也很快很方便。

## 系统

这也是 Windows To Go 相当重要的一部分。一般来说，我会推荐 Windows 21H2 LTSC 版本。企业版带给人清爽、愉快的操作系统使用体验。并且镜像体积略小于 Windows 10 / 11 的零售版，可能如果 U 盘体积小的可以考虑。
那 Windows 7 / 8.1 是否合适去制作 Windows To Go 呢？我认为并不合适。虽然这两个系统带来了光辉岁月，但他们已经比较过时了。Windows 7 本质上不支持 UEFI 的安全启动，而且硬件厂商正在缩小这些老系统的存活率，这些老系统在一些老机子上跑肯定是没问题的，但放在技术不断发展的今天，用老系统制作 Windows To Go 并不是一个合理的选择。

## 制作软件

市面上可选的 Windows To Go 制作软件并不少，DISM++，Refus 等等都是不错的选择。但我认为最好的是萝卜头IT论坛里的 WTGA，因为它操作起来相当简洁，和其他许多软件一样，它也适用系统自带的 DISM 镜像部署功能。并且可自定义度高，也很绿色无公害。并且许多软件并不把我的固态 U 盘当作 U 盘，只有 WTGA 没有这个毛病。
顺便提一句，现在 Legacy 启动的主板越来越少，制作 UEFI 单启动也是一个合理的选择。当然，对于接触不同型号电脑比较多的我还是选择 Legacy + UEFI 双启动的模式。

## 系统使用体验

往往制作 Windows To Go 并不难，给不同电脑打补丁往往才是最蛋疼的部分。往往 Windows Update 可以解决这个问题，但请注意，Windows Update 往往也有固件方面的更新，请谨慎进行更新和升级，以免刷坏固件，这样可就不好玩了。
不同人使用 Windows To Go 有不同的意图。比如我主要以打游戏、写程序和更新文章为主。所以 Office 啥的我都不需要，主要是为了给并不充裕的空间留下更多的地方来以备不时之需。对系统空间使用要尽可能把握好，尽量不要留下一些可有可无的冗余软件。
