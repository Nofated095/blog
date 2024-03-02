---
title: 君 Thinkpad 工程机 Fedora 本当上手
date: 2024-03-01
cover: https://xgjalbum.oss-cn-hangzhou.aliyuncs.com/43cb7c243eab49d55b481gb8/511FA67C-A84C-11ED-B76B-C03EBA168291.png?x-oss-process=image/resize,w_900/format,webp
tags:
- Linux
categories:
- Technology
- Linux
toc: true
---
漫谈从入手 Thinkpad 工程机到 Fedora Workstation 进阶。
<!--more-->
## 前情回顾

在本人还完全不能掌握自己的资金之前，本人大出血在四月份花了 450 人民币购入了 Thinkpad X250，虽然做了一部分升级，但是奈何 X250 还是过于老旧，应付日常工作 5200U 和 4GB RAM 性能略显吃力，再加上已经掌握了自己的资金，于是购买一个新笔记本的计划迫在眉睫。

奈何手头钱并不多，所以要尽可能用少的钱淘来一个性能还凑和的本子。

<script type="text/javascript">
 
window.onload=function(){
		var LinkCards=document.getElementsByClassName('LinkCard');
		if(LinkCards.length != 0){
		var LinkCard=LinkCards[0];
		var link=LinkCard.href;
		var title=LinkCard.innerText;
		LinkCard.innerHTML="<style type=text/css>.LinkCard,.LinkCard:hover{text-decoration:none;border:none!important;color:inherit!important}.LinkCard{position:relative;display:block;margin:1em auto;width:390px;box-sizing:border-box;border-radius:12px;max-width:100%;overflow:hidden;color:inherit;text-decoration:none}.ztext{word-break:break-word;line-height:1.6}.LinkCard-backdrop{position:absolute;top:0;left:0;right:0;bottom:0;background-repeat:no-repeat;-webkit-filter:blur(20px);filter:blur(20px);background-size:cover;background-position:center}.LinkCard,.LinkCard:hover{text-decoration:none;border:none!important;color:inherit!important}.LinkCard-content{position:relative;display:flex;align-items:center;justify-content:space-between;padding:12px;border-radius:inherit;background-color:rgba(246,246,246,0.88)}.LinkCard-text{overflow:hidden}.LinkCard-title{display:-webkit-box;-webkit-line-clamp:2;overflow:hidden;text-overflow:ellipsis;max-height:calc(16px * 1.25 * 2);font-size:16px;font-weight:500;line-height:1.25;color:#1a1a1a}.LinkCard-meta{display:flex;margin-top:4px;font-size:14px;line-height:20px;color:#999;white-space:nowrap}.LinkCard-imageCell{margin-left:8px;border-radius:6px}.LinkCard-image{display:block;width:60px;height:auto;border-radius:inherit}</style><span class=LinkCard-backdrop style=background-image:url(https://zhstatic.zhihu.com/assets/zhihu/editor/zhihu-card-default.svg)></span><span class=LinkCard-content><span class=LinkCard-text><span class=LinkCard-title>"+title+"</span><span class=LinkCard-meta><span style=display:inline-flex;align-items:center>​<svg class="+"'Zi Zi--InsertLink'"+" fill=currentColor viewBox="+"'0 0 24 24'"+" width=17 height=17><path d="+"'M6.77 17.23c-.905-.904-.94-2.333-.08-3.193l3.059-3.06-1.192-1.19-3.059 3.058c-1.489 1.489-1.427 3.954.138 5.519s4.03 1.627 5.519.138l3.059-3.059-1.192-1.192-3.059 3.06c-.86.86-2.289.824-3.193-.08zm3.016-8.673l1.192 1.192 3.059-3.06c.86-.86 2.289-.824 3.193.08.905.905.94 2.334.08 3.194l-3.059 3.06 1.192 1.19 3.059-3.058c1.489-1.489 1.427-3.954-.138-5.519s-4.03-1.627-5.519-.138L9.786 8.557zm-1.023 6.68c.33.33.863.343 1.177.029l5.34-5.34c.314-.314.3-.846-.03-1.176-.33-.33-.862-.344-1.176-.03l-5.34 5.34c-.314.314-.3.846.03 1.177z'"+" fill-rule=evenodd></path></svg></span>"+link+"</span></span><span class=LinkCard-imageCell><img class=LinkCard-image alt=图标 src=https://www.libravatar.org/gravatarproxy/6310f21255ec7534877ec54b7a50ed72?s=256></span></span>";

		for (var i = LinkCards.length - 1; i >= 1; i--) {
		LinkCard=LinkCards[i];
		title=LinkCard.innerText;
		link=LinkCard.href;
		LinkCard.innerHTML="<span class=LinkCard-backdrop style=background-image:url(https://zhstatic.zhihu.com/assets/zhihu/editor/zhihu-card-default.svg)></span><span class=LinkCard-content><span class=LinkCard-text><span class=LinkCard-title>"+title+"</span><span class=LinkCard-meta><span style=display:inline-flex;align-items:center>​<svg class="+"'Zi Zi--InsertLink'"+" fill=currentColor viewBox="+"'0 0 24 24'"+" width=17 height=17><path d="+"'M6.77 17.23c-.905-.904-.94-2.333-.08-3.193l3.059-3.06-1.192-1.19-3.059 3.058c-1.489 1.489-1.427 3.954.138 5.519s4.03 1.627 5.519.138l3.059-3.059-1.192-1.192-3.059 3.06c-.86.86-2.289.824-3.193-.08zm3.016-8.673l1.192 1.192 3.059-3.06c.86-.86 2.289-.824 3.193.08.905.905.94 2.334.08 3.194l-3.059 3.06 1.192 1.19 3.059-3.058c1.489-1.489 1.427-3.954-.138-5.519s-4.03-1.627-5.519-.138L9.786 8.557zm-1.023 6.68c.33.33.863.343 1.177.029l5.34-5.34c.314-.314.3-.846-.03-1.176-.33-.33-.862-.344-1.176-.03l-5.34 5.34c-.314.314-.3.846.03 1.177z'"+" fill-rule=evenodd></path></svg></span>"+link+"</span></span><span class=LinkCard-imageCell><img class=LinkCard-image alt=图标 src=https://www.libravatar.org/gravatarproxy/6310f21255ec7534877ec54b7a50ed72?s=256></span></span>";
		}
	}
}
</script>
<a href="https://blog.tonyding.net/archives/12/" class="LinkCard">一波三折的 ThinkPad X13 Gen2 工程机体验</a>

拜读了 Tony Ding 老师的文章后，我确实也有了用工程机的想法。于是我就开始在各各二手平台蹲消息，但是没想到这么快就蹲出来了。

>价格 2250
> ThinkPad L14 R5 5600U ES 版（工程机），外观完好，橙色很新，带指纹，1920 x 1080 低色域屏，32G DDR4 内存，500G 硬盘，已安装 Windows 10，驱动完整。设备管理器显示有 4G 模块，但是没有卡托，没试过，不知道能不能用。

虽然 2250 比一开始准备的预算稍微高了一点，价格也说不上多划算，但是有 32G 的 RAM 和怎么看都不错的 CPU，再着我也不是资深垃圾佬，大概也没法秒其他更好价的机器，于是就下单了。

## 君工程机本当上手

果真是工程机，确实很创。

到手之后一看 CPU，**AMD Eng Sample**，嗯，这很工程。

重新安装了 Windows 10 LTSC 先凑活用，然后我就开始被工程机创了。

最创的可能是灵车一样的触控板，在 Windows 中甚至没有多指触控，而且还会出现莫名其妙的断连，极其灵车，以及这个机器恐怕麦克风也是工程系，大概略是 Eng Sample，输出来的是完全的白噪音，完全没有任何环境声的捕捉，又被创了一下。

当时的我正在忙于 iGEM 的项目，不过这一点到还好，我马上就享受到了 32G RAM 的便利，终于可以随便开浏览器乱造，开着 VSCode 的同时进行极其流畅的 dev test。

疑似到这里有些过于舒适了。

恰逢双十一固态降价，又入手了一个西数黑盘 SN850X 2000GB，换掉了内置的金士顿的固态。换掉的固态去了惠普小主机 PVE 服役。

于是我就收获了 2TB + 32GB 的 Thinkpad L14。截至到现在，除了被创死了的触控板，都还不错。

## 君 Fedora 本当上手

>温饱思淫欲。

虽然 Windows 是可以凑活用的，但是无奈触控板实在太创，另外又眼馋 Linux Desktop，正好手里 Thinkpad X250 还可以做 Windows 做备胎。

Fedora 启动！

为什么是 Fedora？长期接触 rpm 系的系统让我对 rpm 感到亲切不以。

~~甚至恐怖到安装过 Rocky Linux Workstation。您就是 rpm 小鬼？~~

当然还是因为 Rocky 的仓库包实在少的可怜，遂放弃了 Rocky 工作站的想法。

备份好数据并 boot Fedora Workstation，直接 `fdisk` 创建新 gpt 分区表，分区，写入，