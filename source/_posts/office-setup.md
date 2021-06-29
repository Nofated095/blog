---
title: Office 安装和激活
date: 2021-06-20 13:12:22
cover: https://pic.rmb.bdstatic.com/bjh/640c604de6050143c45ab512973ee479.jpeg
tags:
- Office
- Office 2021
- KMS
- Windows
categories:
- 写BUG日常
- 教程
---
你还在使用标着 Office 2016 增强版的 Office 2019 么，你是天天弹窗盗版软件的受害者么，也许这篇文章可以很好地帮到你
<!--more-->

## 说明

很多人不知道如何用正确的姿势去部署和激活一个 Office。我看到网上有许多文章在提供 Office 的盗版、破解版，并且标着许多密钥。且不说各种捆绑软件、绑定首页让人恶心的营销模式，如果认认真真地按照其中给的方法，基本上你会得到一个 Office 全家桶（而且很多是我们不需要的应用），激活时，可能你下载的 Office 2019 就变成了“Office 2016 专业增强版”，虽然功能上没有什么改变，可是让我们强迫症很难受。

## 准备

- [Office Tool Plus](https://otp.landian.vip/zh-cn/download.html)
- 联网的计算机

选择带有补丁的版本（大约60MB），下载并解压

## 部署 Office

### 卸载 Office（可选）

点击工具箱，找到修复工具中的移除 Office，选择使用 Office Tool Plus 卸载，点击开始。Office Tool Plus 会自动删除计算机中存在的 Office 版本并解除关联。

### 安装 Office

以 Office 2021 为例，打开 *RunMe.bat*，会自动打开应用主程序。点击部署，在产品列表中默认为 ***Microsoft 365 企业应用版***，你可以选择你想要的版本（但是必须要是批量版，即后面标注 **Volume** 的，不然激活比较麻烦）。如果你不知道如何选择，那么推荐你安装 ***Office 专业增强版 2019 - 批量版(ProPlus2019Volume)*** 或 ***Office 专业增强版 2021 - 批量版(ProPlus2021Volume)***。

在「应用程序」中你可以选择安装的应用而不是安装全家桶。比如我一般只会用 Word, Excel, PowerPoint 和 Outlook。

在右侧的「部署设置」中，你可以根据你的电脑的体系结构选择安装「64位」或「32位」，勾选下载后安装并点击开始部署。整个过程时间不长，我大概花了15分钟（下载很快，主要是安装比较缓慢）。

## 激活 Office

部署完成后，退回到主页并点击「激活」。

如果你是全新安装的 Office，可以直接跳过安装许可证，直接填入 KMS 主机进行激活。

点击许可证管理，默认是 Office 专业增强版 2019 - 批量版，你可以选择你下载的对应版本，比如 Office 专业增强版 2021 - 批量版，点击安装许可证，会自动调用OSPP安装。如果失败了，可以点击安装许可证右侧的小三角，把有清除字眼的选项全都选一遍(bushi。

点击KMS 管理，在KMS 主机中填入 **kms.cangshui.net** ，端口留空。点击激活，一切正常的话，你已经完美地激活了你的 Office。

{% raw %}<article class="message is-warn"><div class="message-body">{% endraw %}
KMS 主机有一定可能宕机，这里有一些其他的收集的 KMS 主机
``` html 备用 KMS 主机
kms.cangshui.net
kms.cangshui.net
kms.03k.org
kms.chinancce.com
kms.lotro.cc
kms.luody.info
zh.us.to
kms.library.hk
kms.tttal.com
kms.v0v.bid
kms.moeclub.org
kms8.MSGuides.com
kms9.MSGuides.com
kms.cz9.cn
windows.kms.app
kms.zhuxiaole.org
key.17108.com
222.184.9.98
kms.51it.wang
kms.iaini.net
nb.shenqw.win
kms.srv.crsoo.com
kms.myds.cloud
kms.myftp.org
kms.digiboy.ir
kms.bige0.com
enter.picp.net
```
{% raw %}</div></article>{% endraw %}

### 确认

以上操作没有出现问题的话可以进行安装的确认。你可以点击激活旁边的小三角并点击查看激活信息。
``` bash 激活信息
Office 激活处理
-----------------------------------------------------------------------------
Office 21, Office21ProPlus2021VL_KMS_Client_AE edition
许可证说明: Office 21, VOLUME_KMSCLIENT channel
SKU ID: fbdb3e18-a8ef-4fb3-9183-************
许可证状态:  ---已许可--- 
错误代码: 0x4004F040 (仅供参考，此许可证已激活)
错误信息: 软件授权服务报告已激活该产品，但所有者应检查产品使用权利。
剩余期限: 179 天  (259147 分钟后到期)
产品密钥的最后五个字符: 6F7TH
激活类型配置信息: ALL
	KMS 主机: kms.cangshui.net:1688
	激活间隔: 120 分钟
	续期间隔: 10080 分钟
	KMS 主机缓存: 已启用
```

或者打开安装的任意的 Office 软件，点击账户。在右侧的产品信息中可以看到激活状态。你已经很完美的激活了，而且版本信息不再是网络上流传的 Office 2016 专业增强版了。

虽然可能显示的剩余期限只有180天，但是 Office 会定期联系 KMS 服务器并重置为180天，相当于永久激活，并且用的是正版。这不比用什么会报毒的垃圾激活软件强？另外说一下，市面上流行的激活软件基本上只有激活 Windows 比较靠谱，Office 最好还是用文章的办法。且不会提示此副本为盗版