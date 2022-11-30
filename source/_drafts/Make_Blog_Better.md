---
title: 优化博客
date: 2022-01-07 20:10:00
tags:
- 博客
- Hexo
- Icarus
- Vercel
categories:
- 写 BUG 日常
- 野生技术协会
---
怎么才能让博客加载速度更快呢（呆
<!--more-->

博客已经运行了一段时间了，但是一直以来主站点使用 GitHub Pages 套 CloudFlare，导致整体加载速度一直不尽人意。这几天集中处理了一下博客的问题。

## 解决文章时间问题

<script type="text/javascript">
 
window.onload=function(){
		var LinkCards=document.getElementsByClassName('LinkCard');
		if(LinkCards.length != 0){
		var LinkCard=LinkCards[0];
		var link=LinkCard.href;
		var title=LinkCard.innerText;
		LinkCard.innerHTML="<style type=text/css>.LinkCard,.LinkCard:hover{text-decoration:none;border:none!important;color:inherit!important}.LinkCard{position:relative;display:block;margin:1em auto;width:390px;box-sizing:border-box;border-radius:12px;max-width:100%;overflow:hidden;color:inherit;text-decoration:none}.ztext{word-break:break-word;line-height:1.6}.LinkCard-backdrop{position:absolute;top:0;left:0;right:0;bottom:0;background-repeat:no-repeat;-webkit-filter:blur(20px);filter:blur(20px);background-size:cover;background-position:center}.LinkCard,.LinkCard:hover{text-decoration:none;border:none!important;color:inherit!important}.LinkCard-content{position:relative;display:flex;align-items:center;justify-content:space-between;padding:12px;border-radius:inherit;background-color:rgba(246,246,246,0.88)}.LinkCard-text{overflow:hidden}.LinkCard-title{display:-webkit-box;-webkit-line-clamp:2;overflow:hidden;text-overflow:ellipsis;max-height:calc(16px * 1.25 * 2);font-size:16px;font-weight:500;line-height:1.25;color:#1a1a1a}.LinkCard-meta{display:flex;margin-top:4px;font-size:14px;line-height:20px;color:#999;white-space:nowrap}.LinkCard-imageCell{margin-left:8px;border-radius:6px}.LinkCard-image{display:block;width:60px;height:auto;border-radius:inherit}</style><span class=LinkCard-backdrop style=background-image:url(https://zhstatic.zhihu.com/assets/zhihu/editor/zhihu-card-default.svg)></span><span class=LinkCard-content><span class=LinkCard-text><span class=LinkCard-title>"+title+"</span><span class=LinkCard-meta><span style=display:inline-flex;align-items:center>​<svg class="+"'Zi Zi--InsertLink'"+" fill=currentColor viewBox="+"'0 0 24 24'"+" width=17 height=17><path d="+"'M6.77 17.23c-.905-.904-.94-2.333-.08-3.193l3.059-3.06-1.192-1.19-3.059 3.058c-1.489 1.489-1.427 3.954.138 5.519s4.03 1.627 5.519.138l3.059-3.059-1.192-1.192-3.059 3.06c-.86.86-2.289.824-3.193-.08zm3.016-8.673l1.192 1.192 3.059-3.06c.86-.86 2.289-.824 3.193.08.905.905.94 2.334.08 3.194l-3.059 3.06 1.192 1.19 3.059-3.058c1.489-1.489 1.427-3.954-.138-5.519s-4.03-1.627-5.519-.138L9.786 8.557zm-1.023 6.68c.33.33.863.343 1.177.029l5.34-5.34c.314-.314.3-.846-.03-1.176-.33-.33-.862-.344-1.176-.03l-5.34 5.34c-.314.314-.3.846.03 1.177z'"+" fill-rule=evenodd></path></svg></span>"+link+"</span></span><span class=LinkCard-imageCell><img class=LinkCard-image alt=图标 src=https://cdn.jsdelivr.net/gh/Cubik65536/cubik-favicons@main/CubikLogo.png></span></span>";

		for (var i = LinkCards.length - 1; i >= 1; i--) {
		LinkCard=LinkCards[i];
		title=LinkCard.innerText;
		link=LinkCard.href;
		LinkCard.innerHTML="<span class=LinkCard-backdrop style=background-image:url(https://zhstatic.zhihu.com/assets/zhihu/editor/zhihu-card-default.svg)></span><span class=LinkCard-content><span class=LinkCard-text><span class=LinkCard-title>"+title+"</span><span class=LinkCard-meta><span style=display:inline-flex;align-items:center>​<svg class="+"'Zi Zi--InsertLink'"+" fill=currentColor viewBox="+"'0 0 24 24'"+" width=17 height=17><path d="+"'M6.77 17.23c-.905-.904-.94-2.333-.08-3.193l3.059-3.06-1.192-1.19-3.059 3.058c-1.489 1.489-1.427 3.954.138 5.519s4.03 1.627 5.519.138l3.059-3.059-1.192-1.192-3.059 3.06c-.86.86-2.289.824-3.193-.08zm3.016-8.673l1.192 1.192 3.059-3.06c.86-.86 2.289-.824 3.193.08.905.905.94 2.334.08 3.194l-3.059 3.06 1.192 1.19 3.059-3.058c1.489-1.489 1.427-3.954-.138-5.519s-4.03-1.627-5.519-.138L9.786 8.557zm-1.023 6.68c.33.33.863.343 1.177.029l5.34-5.34c.314-.314.3-.846-.03-1.176-.33-.33-.862-.344-1.176-.03l-5.34 5.34c-.314.314-.3.846.03 1.177z'"+" fill-rule=evenodd></path></svg></span>"+link+"</span></span><span class=LinkCard-imageCell><img class=LinkCard-image alt=图标 src=https://cdn.jsdelivr.net/gh/Cubik65536/cubik-favicons@main/CubikLogo.png></span></span>";
		}
	}
}
</script>
<a href="https://blog.cubik65536.top/2021-08-29-HexoUpdateTime/" class="LinkCard">Hexo 更新日期问题</a>

自从更换到了 GitHub Actions 来部署我的博客，一直有一个让我很烦恼的事情，就是 Hexo 最新部署的文章更新时间会显示成最新的部署时间，这就导致我的博客所有文章的更新时间都是错误的。

{% raw %}<article class="message is-danger"><div class="message-body">{% endraw %}
请确认你的 Hexo 版本为 5.0 及以上
{% raw %}</div></article>{% endraw %}

解决方案是修改 `_config.yml` 中的 `updated_option` 中的值改为 `date`，并重新部署博客。

## 使用更快的静态资源加载

<script type="text/javascript">
 
window.onload=function(){
		var LinkCards=document.getElementsByClassName('LinkCard');
		if(LinkCards.length != 0){
		var LinkCard=LinkCards[0];
		var link=LinkCard.href;
		var title=LinkCard.innerText;
		LinkCard.innerHTML="<style type=text/css>.LinkCard,.LinkCard:hover{text-decoration:none;border:none!important;color:inherit!important}.LinkCard{position:relative;display:block;margin:1em auto;width:390px;box-sizing:border-box;border-radius:12px;max-width:100%;overflow:hidden;color:inherit;text-decoration:none}.ztext{word-break:break-word;line-height:1.6}.LinkCard-backdrop{position:absolute;top:0;left:0;right:0;bottom:0;background-repeat:no-repeat;-webkit-filter:blur(20px);filter:blur(20px);background-size:cover;background-position:center}.LinkCard,.LinkCard:hover{text-decoration:none;border:none!important;color:inherit!important}.LinkCard-content{position:relative;display:flex;align-items:center;justify-content:space-between;padding:12px;border-radius:inherit;background-color:rgba(246,246,246,0.88)}.LinkCard-text{overflow:hidden}.LinkCard-title{display:-webkit-box;-webkit-line-clamp:2;overflow:hidden;text-overflow:ellipsis;max-height:calc(16px * 1.25 * 2);font-size:16px;font-weight:500;line-height:1.25;color:#1a1a1a}.LinkCard-meta{display:flex;margin-top:4px;font-size:14px;line-height:20px;color:#999;white-space:nowrap}.LinkCard-imageCell{margin-left:8px;border-radius:6px}.LinkCard-image{display:block;width:60px;height:auto;border-radius:inherit}</style><span class=LinkCard-backdrop style=background-image:url(https://zhstatic.zhihu.com/assets/zhihu/editor/zhihu-card-default.svg)></span><span class=LinkCard-content><span class=LinkCard-text><span class=LinkCard-title>"+title+"</span><span class=LinkCard-meta><span style=display:inline-flex;align-items:center>​<svg class="+"'Zi Zi--InsertLink'"+" fill=currentColor viewBox="+"'0 0 24 24'"+" width=17 height=17><path d="+"'M6.77 17.23c-.905-.904-.94-2.333-.08-3.193l3.059-3.06-1.192-1.19-3.059 3.058c-1.489 1.489-1.427 3.954.138 5.519s4.03 1.627 5.519.138l3.059-3.059-1.192-1.192-3.059 3.06c-.86.86-2.289.824-3.193-.08zm3.016-8.673l1.192 1.192 3.059-3.06c.86-.86 2.289-.824 3.193.08.905.905.94 2.334.08 3.194l-3.059 3.06 1.192 1.19 3.059-3.058c1.489-1.489 1.427-3.954-.138-5.519s-4.03-1.627-5.519-.138L9.786 8.557zm-1.023 6.68c.33.33.863.343 1.177.029l5.34-5.34c.314-.314.3-.846-.03-1.176-.33-.33-.862-.344-1.176-.03l-5.34 5.34c-.314.314-.3.846.03 1.177z'"+" fill-rule=evenodd></path></svg></span>"+link+"</span></span><span class=LinkCard-imageCell><img class=LinkCard-image alt=图标 src=https://open.cdn.feizhuqwq.com/faviconHD.jpg></span></span>";

		for (var i = LinkCards.length - 1; i >= 1; i--) {
		LinkCard=LinkCards[i];
		title=LinkCard.innerText;
		link=LinkCard.href;
		LinkCard.innerHTML="<span class=LinkCard-backdrop style=background-image:url(https://zhstatic.zhihu.com/assets/zhihu/editor/zhihu-card-default.svg)></span><span class=LinkCard-content><span class=LinkCard-text><span class=LinkCard-title>"+title+"</span><span class=LinkCard-meta><span style=display:inline-flex;align-items:center>​<svg class="+"'Zi Zi--InsertLink'"+" fill=currentColor viewBox="+"'0 0 24 24'"+" width=17 height=17><path d="+"'M6.77 17.23c-.905-.904-.94-2.333-.08-3.193l3.059-3.06-1.192-1.19-3.059 3.058c-1.489 1.489-1.427 3.954.138 5.519s4.03 1.627 5.519.138l3.059-3.059-1.192-1.192-3.059 3.06c-.86.86-2.289.824-3.193-.08zm3.016-8.673l1.192 1.192 3.059-3.06c.86-.86 2.289-.824 3.193.08.905.905.94 2.334.08 3.194l-3.059 3.06 1.192 1.19 3.059-3.058c1.489-1.489 1.427-3.954-.138-5.519s-4.03-1.627-5.519-.138L9.786 8.557zm-1.023 6.68c.33.33.863.343 1.177.029l5.34-5.34c.314-.314.3-.846-.03-1.176-.33-.33-.862-.344-1.176-.03l-5.34 5.34c-.314.314-.3.846.03 1.177z'"+" fill-rule=evenodd></path></svg></span>"+link+"</span></span><span class=LinkCard-imageCell><img class=LinkCard-image alt=图标 src=https://open.cdn.feizhuqwq.com/faviconHD.jpg></span></span>";
		}
	}
}
</script>
<a href="https://blog.feizhuqwq.com/fz/bb3e.html" class="LinkCard">博客加载速度优化之路二</a>

前段时间，jsDelivr 备案许可被注销，导致本站大量静态资源加载失败，要不就是时间极长，拖慢速度，遂寻找更稳定的 CDN 替换。于是我选择了[字节跳动静态资源公共库](https://cdn.bytedance.com/)，加载速度相当不错，也挺稳定的。

这里以 [hexo-theme-icarus](http://ppoffice.github.io/hexo-theme-icarus/) 为例来修改

``` diff _config.icarus.yml
providers:
-   cdn: jsdelivr
-   fontcdn: google
-   iconcdn: fontawesome
+   cdn: '[cdnjs]https://lf26-cdn-tos.bytecdntp.com/cdn/expire-1-M/${package}/${version}/${filename}'
+   fontcdn: loli
+   iconcdn: 'https://lf6-cdn-tos.bytecdntp.com/cdn/expire-1-M/font-awesome/5.15.2/css/all.css'
```

其它主题请根据各个主题的文档自行修改 CDN，一般主题的用户文档中都会写。

## 摆脱 GitHub Pages 和 CloudFlare

因为 GitHub Pages 和 CloudFlare 在一起用对于中国大陆的加载实在太不友好，即使用了更快的静态资源库依然得不到提升，于是我决定从 GitHub Pages 和 Actions 迁移到 [Vercel](https://vercel.com)，且不使用 CloudFlare 的代理。只要注册 Vercel 账户并导入 GitHub 储存库即可。

## 使用最新的主题

最开始安装主题是将主题包的 zip 下载下来并解压到 theme 文件夹，现在我决定弃用这种方法，改为 npm 安装来使用最新版的主题，只要删掉 icarus 的主题文件夹，再在 `package.json` 中里面加入 hexo-theme-icarus 即可

``` diff package.json
  "dependencies": {
    "bulma-stylus": "^0.8.0",
    "hexo": "^5.0.2",
+   "hexo-theme-icarus": "^4.5.0",
    "hexo-deployer-git": "^3.0.0",
```

但是这样做也有缺点，因为每次部署都是从 npm 直接拉取，我无法修改网页底部的信息，所以原来的萌ICP就加不上了，其实挺可惜的。
