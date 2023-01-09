---
title: 折腾你的老 Mac | 给不支持的 Mac 安装 Big Sur
date: 2021-06-08
cover: https://pic.rmb.bdstatic.com/bjh/8122bfd5ae9ef6ed4adbeac8c51d696f.jpeg
tags:
- macOS
categories:
- 写 BUG 日常
- 野生技术协会
toc: true
---
Wi-Fi 问题完美解决。
<!--more-->

{% raw %}<article class="message is-success"><div class="message-body">{% endraw %}
本文基础系统为 macOS Mojave 10.14.6
{% raw %}</div></article>{% endraw %}
本文部分摘自
<script type="text/javascript">
 
window.onload=function(){
		var LinkCards=document.getElementsByClassName('LinkCard');
		if(LinkCards.length != 0){
		var LinkCard=LinkCards[0];
		var link=LinkCard.href;
		var title=LinkCard.innerText;
		LinkCard.innerHTML="<style type=text/css>.LinkCard,.LinkCard:hover{text-decoration:none;border:none!important;color:inherit!important}.LinkCard{position:relative;display:block;margin:1em auto;width:390px;box-sizing:border-box;border-radius:12px;max-width:100%;overflow:hidden;color:inherit;text-decoration:none}.ztext{word-break:break-word;line-height:1.6}.LinkCard-backdrop{position:absolute;top:0;left:0;right:0;bottom:0;background-repeat:no-repeat;-webkit-filter:blur(20px);filter:blur(20px);background-size:cover;background-position:center}.LinkCard,.LinkCard:hover{text-decoration:none;border:none!important;color:inherit!important}.LinkCard-content{position:relative;display:flex;align-items:center;justify-content:space-between;padding:12px;border-radius:inherit;background-color:rgba(246,246,246,0.88)}.LinkCard-text{overflow:hidden}.LinkCard-title{display:-webkit-box;-webkit-line-clamp:2;overflow:hidden;text-overflow:ellipsis;max-height:calc(16px * 1.25 * 2);font-size:16px;font-weight:500;line-height:1.25;color:#1a1a1a}.LinkCard-meta{display:flex;margin-top:4px;font-size:14px;line-height:20px;color:#999;white-space:nowrap}.LinkCard-imageCell{margin-left:8px;border-radius:6px}.LinkCard-image{display:block;width:60px;height:auto;border-radius:inherit}</style><span class=LinkCard-backdrop style=background-image:url(https://zhstatic.zhihu.com/assets/zhihu/editor/zhihu-card-default.svg)></span><span class=LinkCard-content><span class=LinkCard-text><span class=LinkCard-title>"+title+"</span><span class=LinkCard-meta><span style=display:inline-flex;align-items:center>​<svg class="+"'Zi Zi--InsertLink'"+" fill=currentColor viewBox="+"'0 0 24 24'"+" width=17 height=17><path d="+"'M6.77 17.23c-.905-.904-.94-2.333-.08-3.193l3.059-3.06-1.192-1.19-3.059 3.058c-1.489 1.489-1.427 3.954.138 5.519s4.03 1.627 5.519.138l3.059-3.059-1.192-1.192-3.059 3.06c-.86.86-2.289.824-3.193-.08zm3.016-8.673l1.192 1.192 3.059-3.06c.86-.86 2.289-.824 3.193.08.905.905.94 2.334.08 3.194l-3.059 3.06 1.192 1.19 3.059-3.058c1.489-1.489 1.427-3.954-.138-5.519s-4.03-1.627-5.519-.138L9.786 8.557zm-1.023 6.68c.33.33.863.343 1.177.029l5.34-5.34c.314-.314.3-.846-.03-1.176-.33-.33-.862-.344-1.176-.03l-5.34 5.34c-.314.314-.3.846.03 1.177z'"+" fill-rule=evenodd></path></svg></span>"+link+"</span></span><span class=LinkCard-imageCell><img class=LinkCard-image alt=图标 src=https://sysin.org/img/logo.png></span></span>";

		for (var i = LinkCards.length - 1; i >= 1; i--) {
		LinkCard=LinkCards[i];
		title=LinkCard.innerText;
		link=LinkCard.href;
		LinkCard.innerHTML="<span class=LinkCard-backdrop style=background-image:url(https://zhstatic.zhihu.com/assets/zhihu/editor/zhihu-card-default.svg)></span><span class=LinkCard-content><span class=LinkCard-text><span class=LinkCard-title>"+title+"</span><span class=LinkCard-meta><span style=display:inline-flex;align-items:center>​<svg class="+"'Zi Zi--InsertLink'"+" fill=currentColor viewBox="+"'0 0 24 24'"+" width=17 height=17><path d="+"'M6.77 17.23c-.905-.904-.94-2.333-.08-3.193l3.059-3.06-1.192-1.19-3.059 3.058c-1.489 1.489-1.427 3.954.138 5.519s4.03 1.627 5.519.138l3.059-3.059-1.192-1.192-3.059 3.06c-.86.86-2.289.824-3.193-.08zm3.016-8.673l1.192 1.192 3.059-3.06c.86-.86 2.289-.824 3.193.08.905.905.94 2.334.08 3.194l-3.059 3.06 1.192 1.19 3.059-3.058c1.489-1.489 1.427-3.954-.138-5.519s-4.03-1.627-5.519-.138L9.786 8.557zm-1.023 6.68c.33.33.863.343 1.177.029l5.34-5.34c.314-.314.3-.846-.03-1.176-.33-.33-.862-.344-1.176-.03l-5.34 5.34c-.314.314-.3.846.03 1.177z'"+" fill-rule=evenodd></path></svg></span>"+link+"</span></span><span class=LinkCard-imageCell><img class=LinkCard-image alt=图标 src=https://sysin.org/img/logo.png></span></span>";
		}
	}
}
 
</script>

<a href="https://sysin.org/article/install-macos-11-on-unsupported-mac/" class="LinkCard">在不受支持的 Mac 上安装 macOS Big Sur 11 正式版 | sysin</a>

## Big Sur 下载

<https://shuiyunxc.github.io/2021/08/12/20G95/index/>

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
