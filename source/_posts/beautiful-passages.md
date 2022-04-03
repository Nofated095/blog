---
title: 让你的文章更耐看
date: 2020-10-15
cover: https://pic.rmb.bdstatic.com/bjh/2902fadc80bff86b1f657a77e15e2cf1.png
tags:
- Hexo
- Bulma
categories:
- 写BUG日常
- 野生技术协会
---
怎么让自己光秃秃的 MarkDown 文章变得更好看呢？
<!--more-->

本文部分摘自
<script type="text/javascript">
 
window.onload=function(){
		var LinkCards=document.getElementsByClassName('LinkCard');
		if(LinkCards.length != 0){
		var LinkCard=LinkCards[0];
		var link=LinkCard.href;
		var title=LinkCard.innerText;
		LinkCard.innerHTML="<style type=text/css>.LinkCard,.LinkCard:hover{text-decoration:none;border:none!important;color:inherit!important}.LinkCard{position:relative;display:block;margin:1em auto;width:390px;box-sizing:border-box;border-radius:12px;max-width:100%;overflow:hidden;color:inherit;text-decoration:none}.ztext{word-break:break-word;line-height:1.6}.LinkCard-backdrop{position:absolute;top:0;left:0;right:0;bottom:0;background-repeat:no-repeat;-webkit-filter:blur(20px);filter:blur(20px);background-size:cover;background-position:center}.LinkCard,.LinkCard:hover{text-decoration:none;border:none!important;color:inherit!important}.LinkCard-content{position:relative;display:flex;align-items:center;justify-content:space-between;padding:12px;border-radius:inherit;background-color:rgba(246,246,246,0.88)}.LinkCard-text{overflow:hidden}.LinkCard-title{display:-webkit-box;-webkit-line-clamp:2;overflow:hidden;text-overflow:ellipsis;max-height:calc(16px * 1.25 * 2);font-size:16px;font-weight:500;line-height:1.25;color:#1a1a1a}.LinkCard-meta{display:flex;margin-top:4px;font-size:14px;line-height:20px;color:#999;white-space:nowrap}.LinkCard-imageCell{margin-left:8px;border-radius:6px}.LinkCard-image{display:block;width:60px;height:auto;border-radius:inherit}</style><span class=LinkCard-backdrop style=background-image:url(https://zhstatic.zhihu.com/assets/zhihu/editor/zhihu-card-default.svg)></span><span class=LinkCard-content><span class=LinkCard-text><span class=LinkCard-title>"+title+"</span><span class=LinkCard-meta><span style=display:inline-flex;align-items:center>​<svg class="+"'Zi Zi--InsertLink'"+" fill=currentColor viewBox="+"'0 0 24 24'"+" width=17 height=17><path d="+"'M6.77 17.23c-.905-.904-.94-2.333-.08-3.193l3.059-3.06-1.192-1.19-3.059 3.058c-1.489 1.489-1.427 3.954.138 5.519s4.03 1.627 5.519.138l3.059-3.059-1.192-1.192-3.059 3.06c-.86.86-2.289.824-3.193-.08zm3.016-8.673l1.192 1.192 3.059-3.06c.86-.86 2.289-.824 3.193.08.905.905.94 2.334.08 3.194l-3.059 3.06 1.192 1.19 3.059-3.058c1.489-1.489 1.427-3.954-.138-5.519s-4.03-1.627-5.519-.138L9.786 8.557zm-1.023 6.68c.33.33.863.343 1.177.029l5.34-5.34c.314-.314.3-.846-.03-1.176-.33-.33-.862-.344-1.176-.03l-5.34 5.34c-.314.314-.3.846.03 1.177z'"+" fill-rule=evenodd></path></svg></span>"+link+"</span></span><span class=LinkCard-imageCell><img class=LinkCard-image alt=图标 src=https://www.imaegoo.com/images/avatar.jpg></span></span>";

		for (var i = LinkCards.length - 1; i >= 1; i--) {
		LinkCard=LinkCards[i];
		title=LinkCard.innerText;
		link=LinkCard.href;
		LinkCard.innerHTML="<span class=LinkCard-backdrop style=background-image:url(https://zhstatic.zhihu.com/assets/zhihu/editor/zhihu-card-default.svg)></span><span class=LinkCard-content><span class=LinkCard-text><span class=LinkCard-title>"+title+"</span><span class=LinkCard-meta><span style=display:inline-flex;align-items:center>​<svg class="+"'Zi Zi--InsertLink'"+" fill=currentColor viewBox="+"'0 0 24 24'"+" width=17 height=17><path d="+"'M6.77 17.23c-.905-.904-.94-2.333-.08-3.193l3.059-3.06-1.192-1.19-3.059 3.058c-1.489 1.489-1.427 3.954.138 5.519s4.03 1.627 5.519.138l3.059-3.059-1.192-1.192-3.059 3.06c-.86.86-2.289.824-3.193-.08zm3.016-8.673l1.192 1.192 3.059-3.06c.86-.86 2.289-.824 3.193.08.905.905.94 2.334.08 3.194l-3.059 3.06 1.192 1.19 3.059-3.058c1.489-1.489 1.427-3.954-.138-5.519s-4.03-1.627-5.519-.138L9.786 8.557zm-1.023 6.68c.33.33.863.343 1.177.029l5.34-5.34c.314-.314.3-.846-.03-1.176-.33-.33-.862-.344-1.176-.03l-5.34 5.34c-.314.314-.3.846.03 1.177z'"+" fill-rule=evenodd></path></svg></span>"+link+"</span></span><span class=LinkCard-imageCell><img class=LinkCard-image alt=图标 src=https://www.imaegoo.com/images/avatar.jpg></span></span>";
		}
	}
}
 
</script>

<a href="https://www.imaegoo.com/2020/icarus-with-bulma/" class="LinkCard">活用 Bulma 美化 Icarus 文章 | iMaeGoo's Blog</a>



## 按钮

<div class="buttons">
  <button class="button is-info">Info</button>
  <button class="button is-success">Success</button>
  <button class="button is-warning">Warning</button>
  <button class="button is-danger">Danger</button>
</div>

``` js 点击展开代码>folded
<div class="buttons">
  <button class="button is-info">Info</button>
  <button class="button is-success">Success</button>
  <button class="button is-warning">Warning</button>
  <button class="button is-danger">Danger</button>
</div>
```

光有按钮肯定是不行的，一般我们还需要给按钮增加事件，比如点击下面的按钮，可以计算你的身份证效验码。

<button class="button is-info" onclick="alert(calc(prompt('请输入待计算的身份证号前17位')))">计算身份证效验码</button>

<script>function calc(str)
{
/*
*/
	var coeff = [7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2,1];
	var suffix = ['1','0','x','9','8','7','6','5','4','3','2'];
	var sum = 0;
	for(var i=0;i<17;i++)
		sum += coeff[i] * parseInt(str.charCodeAt(i)-48);
	sum %= 11;
	str = str.substr(0,17) + suffix[sum];
	return str;
}
</script>

``` js 点击展开代码>folded
<script>function calc(str)
{
/*
*/
	var coeff = [7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2,1];
	var suffix = ['1','0','x','9','8','7','6','5','4','3','2'];
	var sum = 0;
	for(var i=0;i<17;i++)
		sum += coeff[i] * parseInt(str.charCodeAt(i)-48);
	sum %= 11;
	str = str.substr(0,17) + suffix[sum];
	return str;
}
</script>
```

显示一言

<button class="button is-info" onclick="showHitokoto(event)">显示一言</button>
<blockquote class="hitokoto">↑↑↑ 试着点击“显示一言”！</blockquote>

<script>
function showHitokoto (event) {
    event.target.classList.add('is-loading');
    $.ajax({
        type: 'GET',
        url: 'https://v1.hitokoto.cn/',
        success: function (data) {
            $('.hitokoto').text(data.hitokoto);
            event.target.classList.remove('is-loading');
        }
    });
}
</script>

``` js 点击展开代码>folded
<button class="button is-info" onclick="showHitokoto(event)">显示一言</button>
<blockquote class="hitokoto">↑↑↑ 试着点击“显示一言”！</blockquote>

<script>
function showHitokoto (event) {
    event.target.classList.add('is-loading');
    $.ajax({
        type: 'GET',
        url: 'https://v1.hitokoto.cn/',
        success: function (data) {
            $('.hitokoto').text(data.hitokoto);
            event.target.classList.remove('is-loading');
        }
    });
}
</script>
```

## 标签页

<div class="tabs is-toggle"><ul>
<li class="is-active"><a onclick="onTabClick(event)">
<span class="icon is-small"><i class="fas fa-image" aria-hidden="true"></i></span>
<span>Pictures</span>
</a></li>
<li><a onclick="onTabClick(event)">
<span class="icon is-small"><i class="fas fa-music" aria-hidden="true"></i></span>
<span>Music</span>
</a></li>
<li><a onclick="onTabClick(event)">
<span class="icon is-small"><i class="fas fa-film" aria-hidden="true"></i></span>
<span>Videos</span>
</a></li>
<li><a onclick="onTabClick(event)">
<span class="icon is-small"><i class="far fa-file-alt" aria-hidden="true"></i></span>
<span>Documents</span>
</a></li>
</ul></div>

{% raw %}<div id="Pictures" class="tab-content" style="display: block;">{% endraw %}
[Pixabay](https://pixabay.com/zh/) 是全球知名的图库网站及充满活力的创意社区,拥有上百万张免费正版高清照片素材,涵盖风景、人物、动态、静物等多种分类,你可以在任何地方使用 Pixabay 图库中的素材...
{% raw %}</div>{% endraw %}
{% raw %}<div id="Music" class="tab-content">{% endraw %}
[网易云音乐](https://music.163.com/) 是一款专注于发现与分享的音乐产品,依托专业音乐人、DJ、好友推荐及社交功能,为用户打造全新的音乐生活。
{% raw %}</div>{% endraw %}
{% raw %}<div id="Videos" class="tab-content">{% endraw %}
[哔哩哔哩](https://www.bilibili.com/) 是国内知名的视频弹幕网站,这里有最及时的动漫新番,最棒的ACG氛围,最有创意的Up主。大家可以在这里找到许多欢乐。
{% raw %}</div>{% endraw %}
{% raw %}<div id="Documents" class="tab-content">{% endraw %}
[石墨文档](https://shimo.im/) 是全新一代云 Office 办公软件,支持多人在线协作编辑文档和表格,独有内容级安全,全过程留痕可追溯。PC 端和移动端全覆盖,随时随地远程办公。即写即存...
{% raw %}</div>{% endraw %}

<style type="text/css">
.content .tabs ul { margin: 0; }
.tab-content { display: none; }
</style>

<script>
function onTabClick (event) {
    var tabTitle = $(event.currentTarget).children('span:last-child').text();
    $('.article .content .tab-content').css('display', 'none');
    $('.article .content .tabs li').removeClass('is-active');
    $('#' + tabTitle).css('display', 'block');
    $(event.currentTarget).parent().addClass('is-active');
}
</script>

``` js 点击展开代码>folded
<div class="tabs is-toggle"><ul>
<li class="is-active"><a onclick="onTabClick(event)">
<span class="icon is-small"><i class="fas fa-image" aria-hidden="true"></i></span>
<span>Pictures</span>
</a></li>
<li><a onclick="onTabClick(event)">
<span class="icon is-small"><i class="fas fa-music" aria-hidden="true"></i></span>
<span>Music</span>
</a></li>
<li><a onclick="onTabClick(event)">
<span class="icon is-small"><i class="fas fa-film" aria-hidden="true"></i></span>
<span>Videos</span>
</a></li>
<li><a onclick="onTabClick(event)">
<span class="icon is-small"><i class="far fa-file-alt" aria-hidden="true"></i></span>
<span>Documents</span>
</a></li>
</ul></div>

{% raw %}<div id="Pictures" class="tab-content" style="display: block;">{% endraw %}
[Pixabay](https://pixabay.com/zh/) 是全球知名的图库网站及充满活力的创意社区,拥有上百万张免费正版高清照片素材,涵盖风景、人物、动态、静物等多种分类,你可以在任何地方使用 Pixabay 图库中的素材...
{% raw %}</div>{% endraw %}
{% raw %}<div id="Music" class="tab-content">{% endraw %}
[网易云音乐](https://music.163.com/) 是一款专注于发现与分享的音乐产品,依托专业音乐人、DJ、好友推荐及社交功能,为用户打造全新的音乐生活。
{% raw %}</div>{% endraw %}
{% raw %}<div id="Videos" class="tab-content">{% endraw %}
[哔哩哔哩](https://www.bilibili.com/) 是国内知名的视频弹幕网站,这里有最及时的动漫新番,最棒的ACG氛围,最有创意的Up主。大家可以在这里找到许多欢乐。
{% raw %}</div>{% endraw %}
{% raw %}<div id="Documents" class="tab-content">{% endraw %}
[石墨文档](https://shimo.im/) 是全新一代云 Office 办公软件,支持多人在线协作编辑文档和表格,独有内容级安全,全过程留痕可追溯。PC 端和移动端全覆盖,随时随地远程办公。即写即存...
{% raw %}</div>{% endraw %}

<style type="text/css">
.content .tabs ul { margin: 0; }
.tab-content { display: none; }
</style>

<script>
function onTabClick (event) {
    var tabTitle = $(event.currentTarget).children('span:last-child').text();
    $('.article .content .tab-content').css('display', 'none');
    $('.article .content .tabs li').removeClass('is-active');
    $('#' + tabTitle).css('display', 'block');
    $(event.currentTarget).parent().addClass('is-active');
}
</script>
```

## 彩色突出

{% raw %}<div class="notification is-info">{% endraw %}
[Icarus](https://blog.zhangruipeng.me/hexo-theme-icarus/) 主题以白色的简洁为主，但有时候我们希望在文章中用**特别的样式**注明一些内容，*markdown* 语法就不够用了，所以在此分享一下我的高级玩法。
{% raw %}</div>{% endraw %}

``` js 点击展开代码>folded
{% raw %}<div class="notification is-info">{% endraw %}
[Icarus](https://blog.zhangruipeng.me/hexo-theme-icarus/) 主题以白色的简洁为主，但有时候我们希望在文章中用**特别的样式**注明一些内容，*markdown* 语法就不够用了，所以在此分享一下我的高级玩法。
{% raw %}</div>{% endraw %}
```

{% raw %}<div class="notification is-success">{% endraw %}
[Icarus](https://blog.zhangruipeng.me/hexo-theme-icarus/) 主题以白色的简洁为主，但有时候我们希望在文章中用**特别的样式**注明一些内容，*markdown* 语法就不够用了，所以在此分享一下我的高级玩法。
{% raw %}</div>{% endraw %}

``` js 点击展开代码>folded
{% raw %}<div class="notification is-success">{% endraw %}
[Icarus](https://blog.zhangruipeng.me/hexo-theme-icarus/) 主题以白色的简洁为主，但有时候我们希望在文章中用**特别的样式**注明一些内容，*markdown* 语法就不够用了，所以在此分享一下我的高级玩法。
{% raw %}</div>{% endraw %}
```

{% raw %}<div class="notification is-warning">{% endraw %}
[Icarus](https://blog.zhangruipeng.me/hexo-theme-icarus/) 主题以白色的简洁为主，但有时候我们希望在文章中用**特别的样式**注明一些内容，*markdown* 语法就不够用了，所以在此分享一下我的高级玩法。
{% raw %}</div>{% endraw %}

``` js 点击展开代码>folded
{% raw %}<div class="notification is-warning">{% endraw %}
[Icarus](https://blog.zhangruipeng.me/hexo-theme-icarus/) 主题以白色的简洁为主，但有时候我们希望在文章中用**特别的样式**注明一些内容，*markdown* 语法就不够用了，所以在此分享一下我的高级玩法。
{% raw %}</div>{% endraw %}
```

{% raw %}<div class="notification is-danger">{% endraw %}
[Icarus](https://blog.zhangruipeng.me/hexo-theme-icarus/) 主题以白色的简洁为主，但有时候我们希望在文章中用**特别的样式**注明一些内容，*markdown* 语法就不够用了，所以在此分享一下我的高级玩法。
{% raw %}</div>{% endraw %}

``` js 点击展开代码>folded
{% raw %}<div class="notification is-danger">{% endraw %}
[Icarus](https://blog.zhangruipeng.me/hexo-theme-icarus/) 主题以白色的简洁为主，但有时候我们希望在文章中用**特别的样式**注明一些内容，*markdown* 语法就不够用了，所以在此分享一下我的高级玩法。
{% raw %}</div>{% endraw %}
```

{% raw %}<article class="message is-info"><div class="message-body">{% endraw %}
[Icarus](https://blog.zhangruipeng.me/hexo-theme-icarus/) 主题以白色的简洁为主，但有时候我们希望在文章中用**特别的样式**注明一些内容，*markdown* 语法就不够用了，所以在此分享一下我的高级玩法。
{% raw %}</div></article>{% endraw %}

``` js 点击展开代码>folded
{% raw %}<article class="message is-info"><div class="message-body">{% endraw %}
[Icarus](https://blog.zhangruipeng.me/hexo-theme-icarus/) 主题以白色的简洁为主，但有时候我们希望在文章中用**特别的样式**注明一些内容，*markdown* 语法就不够用了，所以在此分享一下我的高级玩法。
{% raw %}</div></article>{% endraw %}
```

{% raw %}<article class="message is-success"><div class="message-body">{% endraw %}
[Icarus](https://blog.zhangruipeng.me/hexo-theme-icarus/) 主题以白色的简洁为主，但有时候我们希望在文章中用**特别的样式**注明一些内容，*markdown* 语法就不够用了，所以在此分享一下我的高级玩法。
{% raw %}</div></article>{% endraw %}

``` js 点击展开代码>folded
{% raw %}<article class="message is-success"><div class="message-body">{% endraw %}
[Icarus](https://blog.zhangruipeng.me/hexo-theme-icarus/) 主题以白色的简洁为主，但有时候我们希望在文章中用**特别的样式**注明一些内容，*markdown* 语法就不够用了，所以在此分享一下我的高级玩法。
{% raw %}</div></article>{% endraw %}
```

{% raw %}<article class="message is-warning"><div class="message-body">{% endraw %}
[Icarus](https://blog.zhangruipeng.me/hexo-theme-icarus/) 主题以白色的简洁为主，但有时候我们希望在文章中用**特别的样式**注明一些内容，*markdown* 语法就不够用了，所以在此分享一下我的高级玩法。
{% raw %}</div></article>{% endraw %}

``` js 点击展开代码>folded
{% raw %}<article class="message is-warning"><div class="message-body">{% endraw %}
[Icarus](https://blog.zhangruipeng.me/hexo-theme-icarus/) 主题以白色的简洁为主，但有时候我们希望在文章中用**特别的样式**注明一些内容，*markdown* 语法就不够用了，所以在此分享一下我的高级玩法。
{% raw %}</div></article>{% endraw %}
```

{% raw %}<article class="message is-danger"><div class="message-body">{% endraw %}
[Icarus](https://blog.zhangruipeng.me/hexo-theme-icarus/) 主题以白色的简洁为主，但有时候我们希望在文章中用**特别的样式**注明一些内容，*markdown* 语法就不够用了，所以在此分享一下我的高级玩法。
{% raw %}</div></article>{% endraw %}

``` js 点击展开代码>folded
{% raw %}<article class="message is-danger"><div class="message-body">{% endraw %}
[Icarus](https://blog.zhangruipeng.me/hexo-theme-icarus/) 主题以白色的简洁为主，但有时候我们希望在文章中用**特别的样式**注明一些内容，*markdown* 语法就不够用了，所以在此分享一下我的高级玩法。
{% raw %}</div></article>{% endraw %}
```

{% raw %}<article class="message is-info"><div class="message-header">{% endraw %}
活用 Bulma 美化文章
{% raw %}</div><div class="message-body">{% endraw %}
[Icarus](https://blog.zhangruipeng.me/hexo-theme-icarus/) 主题以白色的简洁为主，但有时候我们希望在文章中用**特别的样式**注明一些内容，*markdown* 语法就不够用了，所以在此分享一下我的高级玩法。
{% raw %}</div></article>{% endraw %}

``` js 点击展开代码>folded
{% raw %}<article class="message is-info"><div class="message-header">{% endraw %}
活用 Bulma 美化文章
{% raw %}</div><div class="message-body">{% endraw %}
[Icarus](https://blog.zhangruipeng.me/hexo-theme-icarus/) 主题以白色的简洁为主，但有时候我们希望在文章中用**特别的样式**注明一些内容，*markdown* 语法就不够用了，所以在此分享一下我的高级玩法。
{% raw %}</div></article>{% endraw %}
```

## 你知道的太多了

{% raw %}
<style type="text/css">
.heimu { color: #000; background-color: #000; }
.heimu:hover { color: #fff; }
</style>
{% endraw %}
我们要科学利用网络，提高媒介素养，积极利用网络获取新知。学会信息节食，不沉迷于网络 {% raw %}<span class="heimu">就像我一样2333</span>{% endraw %}，还可以积极利用网络为国家和社会发展建言献策{% raw %}<span class="heimu">我就参加过</span>{% endraw %}。

``` js 点击展开代码>folded
{% raw %}
<style type="text/css">
.heimu { color: #000; background-color: #000; }
.heimu:hover { color: #fff; }
</style>
{% endraw %}
我们要科学利用网络，提高媒介素养，积极利用网络获取新知。学会信息节食，不沉迷于网络 {% raw %}<span class="heimu">就像我一样2333</span>{% endraw %}，还可以积极利用网络为国家和社会发展建言献策{% raw %}<span class="heimu">我就参加过</span>{% endraw %}。
```

## 点击展开代码

``` js 点击展开代码>folded
``` js 点击展开代码>folded
<p>Hello, Bulma!</p>
```

## 封面来源声明

<a class="tag is-dark is-medium" href="https://bulma.io" target="_blank">
<span class="icon"><i class="fas fa-camera"></i></span>&nbsp;&nbsp;
Bulma Docs
</a>

``` js 点击展开代码>folded
<a class="tag is-dark is-medium" href="https://bulma.io" target="_blank">
<span class="icon"><i class="fas fa-camera"></i></span>&nbsp;&nbsp;
Bulma Docs
</a>
```

## 文章引用
<script type="text/javascript">
 
window.onload=function(){
		var LinkCards=document.getElementsByClassName('LinkCard');
		if(LinkCards.length != 0){
		var LinkCard=LinkCards[0];
		var link=LinkCard.href;
		var title=LinkCard.innerText;
		LinkCard.innerHTML="<style type=text/css>.LinkCard,.LinkCard:hover{text-decoration:none;border:none!important;color:inherit!important}.LinkCard{position:relative;display:block;margin:1em auto;width:390px;box-sizing:border-box;border-radius:12px;max-width:100%;overflow:hidden;color:inherit;text-decoration:none}.ztext{word-break:break-word;line-height:1.6}.LinkCard-backdrop{position:absolute;top:0;left:0;right:0;bottom:0;background-repeat:no-repeat;-webkit-filter:blur(20px);filter:blur(20px);background-size:cover;background-position:center}.LinkCard,.LinkCard:hover{text-decoration:none;border:none!important;color:inherit!important}.LinkCard-content{position:relative;display:flex;align-items:center;justify-content:space-between;padding:12px;border-radius:inherit;background-color:rgba(246,246,246,0.88)}.LinkCard-text{overflow:hidden}.LinkCard-title{display:-webkit-box;-webkit-line-clamp:2;overflow:hidden;text-overflow:ellipsis;max-height:calc(16px * 1.25 * 2);font-size:16px;font-weight:500;line-height:1.25;color:#1a1a1a}.LinkCard-meta{display:flex;margin-top:4px;font-size:14px;line-height:20px;color:#999;white-space:nowrap}.LinkCard-imageCell{margin-left:8px;border-radius:6px}.LinkCard-image{display:block;width:60px;height:auto;border-radius:inherit}</style><span class=LinkCard-backdrop style=background-image:url(https://zhstatic.zhihu.com/assets/zhihu/editor/zhihu-card-default.svg)></span><span class=LinkCard-content><span class=LinkCard-text><span class=LinkCard-title>"+title+"</span><span class=LinkCard-meta><span style=display:inline-flex;align-items:center>​<svg class="+"'Zi Zi--InsertLink'"+" fill=currentColor viewBox="+"'0 0 24 24'"+" width=17 height=17><path d="+"'M6.77 17.23c-.905-.904-.94-2.333-.08-3.193l3.059-3.06-1.192-1.19-3.059 3.058c-1.489 1.489-1.427 3.954.138 5.519s4.03 1.627 5.519.138l3.059-3.059-1.192-1.192-3.059 3.06c-.86.86-2.289.824-3.193-.08zm3.016-8.673l1.192 1.192 3.059-3.06c.86-.86 2.289-.824 3.193.08.905.905.94 2.334.08 3.194l-3.059 3.06 1.192 1.19 3.059-3.058c1.489-1.489 1.427-3.954-.138-5.519s-4.03-1.627-5.519-.138L9.786 8.557zm-1.023 6.68c.33.33.863.343 1.177.029l5.34-5.34c.314-.314.3-.846-.03-1.176-.33-.33-.862-.344-1.176-.03l-5.34 5.34c-.314.314-.3.846.03 1.177z'"+" fill-rule=evenodd></path></svg></span>"+link+"</span></span><span class=LinkCard-imageCell><img class=LinkCard-image alt=图标 src=https://pic.rmb.bdstatic.com/bjh/020a46e8318d66b55d73afe31805d653.jpeg></span></span>";

		for (var i = LinkCards.length - 1; i >= 1; i--) {
		LinkCard=LinkCards[i];
		title=LinkCard.innerText;
		link=LinkCard.href;
		LinkCard.innerHTML="<span class=LinkCard-backdrop style=background-image:url(https://zhstatic.zhihu.com/assets/zhihu/editor/zhihu-card-default.svg)></span><span class=LinkCard-content><span class=LinkCard-text><span class=LinkCard-title>"+title+"</span><span class=LinkCard-meta><span style=display:inline-flex;align-items:center>​<svg class="+"'Zi Zi--InsertLink'"+" fill=currentColor viewBox="+"'0 0 24 24'"+" width=17 height=17><path d="+"'M6.77 17.23c-.905-.904-.94-2.333-.08-3.193l3.059-3.06-1.192-1.19-3.059 3.058c-1.489 1.489-1.427 3.954.138 5.519s4.03 1.627 5.519.138l3.059-3.059-1.192-1.192-3.059 3.06c-.86.86-2.289.824-3.193-.08zm3.016-8.673l1.192 1.192 3.059-3.06c.86-.86 2.289-.824 3.193.08.905.905.94 2.334.08 3.194l-3.059 3.06 1.192 1.19 3.059-3.058c1.489-1.489 1.427-3.954-.138-5.519s-4.03-1.627-5.519-.138L9.786 8.557zm-1.023 6.68c.33.33.863.343 1.177.029l5.34-5.34c.314-.314.3-.846-.03-1.176-.33-.33-.862-.344-1.176-.03l-5.34 5.34c-.314.314-.3.846.03 1.177z'"+" fill-rule=evenodd></path></svg></span>"+link+"</span></span><span class=LinkCard-imageCell><img class=LinkCard-image alt=图标 src=https://pic.rmb.bdstatic.com/bjh/020a46e8318d66b55d73afe31805d653.jpeg></span></span>";
		}
	}
}
 
</script>

<a href="https://blog.nofated.win" class="LinkCard">Nofated's Blog</a>
``` js 点击展开代码>folded
<script type="text/javascript">
 
window.onload=function(){
		var LinkCards=document.getElementsByClassName('LinkCard');
		if(LinkCards.length != 0){
		var LinkCard=LinkCards[0];
		var link=LinkCard.href;
		var title=LinkCard.innerText;
		LinkCard.innerHTML="<style type=text/css>.LinkCard,.LinkCard:hover{text-decoration:none;border:none!important;color:inherit!important}.LinkCard{position:relative;display:block;margin:1em auto;width:390px;box-sizing:border-box;border-radius:12px;max-width:100%;overflow:hidden;color:inherit;text-decoration:none}.ztext{word-break:break-word;line-height:1.6}.LinkCard-backdrop{position:absolute;top:0;left:0;right:0;bottom:0;background-repeat:no-repeat;-webkit-filter:blur(20px);filter:blur(20px);background-size:cover;background-position:center}.LinkCard,.LinkCard:hover{text-decoration:none;border:none!important;color:inherit!important}.LinkCard-content{position:relative;display:flex;align-items:center;justify-content:space-between;padding:12px;border-radius:inherit;background-color:rgba(246,246,246,0.88)}.LinkCard-text{overflow:hidden}.LinkCard-title{display:-webkit-box;-webkit-line-clamp:2;overflow:hidden;text-overflow:ellipsis;max-height:calc(16px * 1.25 * 2);font-size:16px;font-weight:500;line-height:1.25;color:#1a1a1a}.LinkCard-meta{display:flex;margin-top:4px;font-size:14px;line-height:20px;color:#999;white-space:nowrap}.LinkCard-imageCell{margin-left:8px;border-radius:6px}.LinkCard-image{display:block;width:60px;height:auto;border-radius:inherit}</style><span class=LinkCard-backdrop style=background-image:url(https://zhstatic.zhihu.com/assets/zhihu/editor/zhihu-card-default.svg)></span><span class=LinkCard-content><span class=LinkCard-text><span class=LinkCard-title>"+title+"</span><span class=LinkCard-meta><span style=display:inline-flex;align-items:center>​<svg class="+"'Zi Zi--InsertLink'"+" fill=currentColor viewBox="+"'0 0 24 24'"+" width=17 height=17><path d="+"'M6.77 17.23c-.905-.904-.94-2.333-.08-3.193l3.059-3.06-1.192-1.19-3.059 3.058c-1.489 1.489-1.427 3.954.138 5.519s4.03 1.627 5.519.138l3.059-3.059-1.192-1.192-3.059 3.06c-.86.86-2.289.824-3.193-.08zm3.016-8.673l1.192 1.192 3.059-3.06c.86-.86 2.289-.824 3.193.08.905.905.94 2.334.08 3.194l-3.059 3.06 1.192 1.19 3.059-3.058c1.489-1.489 1.427-3.954-.138-5.519s-4.03-1.627-5.519-.138L9.786 8.557zm-1.023 6.68c.33.33.863.343 1.177.029l5.34-5.34c.314-.314.3-.846-.03-1.176-.33-.33-.862-.344-1.176-.03l-5.34 5.34c-.314.314-.3.846.03 1.177z'"+" fill-rule=evenodd></path></svg></span>"+link+"</span></span><span class=LinkCard-imageCell><img class=LinkCard-image alt=图标 src=https://pic.rmb.bdstatic.com/bjh/020a46e8318d66b55d73afe31805d653.jpeg></span></span>";

		for (var i = LinkCards.length - 1; i >= 1; i--) {
		LinkCard=LinkCards[i];
		title=LinkCard.innerText;
		link=LinkCard.href;
		LinkCard.innerHTML="<span class=LinkCard-backdrop style=background-image:url(https://zhstatic.zhihu.com/assets/zhihu/editor/zhihu-card-default.svg)></span><span class=LinkCard-content><span class=LinkCard-text><span class=LinkCard-title>"+title+"</span><span class=LinkCard-meta><span style=display:inline-flex;align-items:center>​<svg class="+"'Zi Zi--InsertLink'"+" fill=currentColor viewBox="+"'0 0 24 24'"+" width=17 height=17><path d="+"'M6.77 17.23c-.905-.904-.94-2.333-.08-3.193l3.059-3.06-1.192-1.19-3.059 3.058c-1.489 1.489-1.427 3.954.138 5.519s4.03 1.627 5.519.138l3.059-3.059-1.192-1.192-3.059 3.06c-.86.86-2.289.824-3.193-.08zm3.016-8.673l1.192 1.192 3.059-3.06c.86-.86 2.289-.824 3.193.08.905.905.94 2.334.08 3.194l-3.059 3.06 1.192 1.19 3.059-3.058c1.489-1.489 1.427-3.954-.138-5.519s-4.03-1.627-5.519-.138L9.786 8.557zm-1.023 6.68c.33.33.863.343 1.177.029l5.34-5.34c.314-.314.3-.846-.03-1.176-.33-.33-.862-.344-1.176-.03l-5.34 5.34c-.314.314-.3.846.03 1.177z'"+" fill-rule=evenodd></path></svg></span>"+link+"</span></span><span class=LinkCard-imageCell><img class=LinkCard-image alt=图标 src=https://pic.rmb.bdstatic.com/bjh/020a46e8318d66b55d73afe31805d653.jpeg></span></span>";
		}
	}
}
 
</script>

<a href="https://blog.nofated.win/" class="LinkCard">Nofated's Blog</a>
```
