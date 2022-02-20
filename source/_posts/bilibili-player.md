---
title: B站外嵌视频播放器防踩坑
date: 2020-09-21 10:08:09
cover: https://pic.rmb.bdstatic.com/bjh/c6d5d344aef87ec4511ff2521dd304bd.jpeg
tags:
- HTML5
- Bilibili
categories:
- 写BUG日常
- 野生技术协会
---
B站有一个神奇的`嵌入代码`的功能，但是这个功能不经过我们加工后直接放出来很丑。问了问度娘并简单研究了一下，我把我遇到的一些问题和解决方法贴出来。
<!--more-->
{% raw %}<article class="message is-success"><div class="message-body">{% endraw %}
我们拿 [BV1PC4y1t77X](https://www.bilibili.com/video/BV1PC4y1t77X) 这个视频来进行测试。
{% raw %}</div></article>{% endraw %}

## 视频下面给出的嵌入代码的问题

![嵌入代码](https://pic.rmb.bdstatic.com/bjh/83e5afc3e50b52eff95825a9024d8e2b.jpeg)

在这里把代码原封不动复制过来，得到了下面的这个玩意。

<iframe src="//player.bilibili.com/player.html?aid=796700174&bvid=BV1PC4y1t77X&cid=223520581&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>

``` HTML 点击展开代码>folded
<iframe src="//player.bilibili.com/player.html?aid=796700174&bvid=BV1PC4y1t77X&cid=223520581&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
```

这是未经我们自定义得到的外嵌播放器，问题很多，清晰度不是我们想要的，没法自适应屏幕。

但是网络上的大佬多啊，很快就找到了大佬给的说明。

|变量|说明|
|:-:|:-:|
|cid|chat id，每个chat id对应一组弹幕池。如果填了aid这个字段不填也没关系|
|aid|article id, 视频的av号。就是视频链接结尾 avxxxx 后面的数字。如果填了bvid这个字段不填也没关系|
|bvid|bilibili video id, 视频的bv号。就是视频链接结尾 BVxxxx 后面的字符。2020.03 时候, B站把 AV 号根据一定的算法转成这个了|
|page|第几个视频, 起始下标为 1 (默认值也是为1)。就是B站视频选集里的第几个视频，俗称p1、p2|
|as_wide|是否宽屏。1: 宽屏, 0: 小屏|
|high_quality|是否高清。1: 高清, 0: 最低视频质量(默认)/如视频有 360p 720p 1080p 三种, 默认或者 high_quality=0 是最低 360p。high_quality=1 是最高1080p|
|danmaku|是否开启弹幕。1: 开启(默认), 0: 关闭|
|t|打开时, 自动跳转到某个时间, 并且自动播放(单位秒)。比如 t=60, 那么自动跳转到1分钟, 且自动播放|

{% raw %}<article class="message is-success"><div class="message-body">{% endraw %}
这个说明具有时效性，可能随着B站修改播放器，这个说明会失效
{% raw %}</div></article>{% endraw %}

我照着这个又简单改了改 iframe 模块，得到了这个。

<iframe src="//player.bilibili.com/player.html?bvid=BV1PC4y1t77X&page=1&danmaku=0&high_quality=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>

``` HTML 点击展开代码>folded
<iframe src="//player.bilibili.com/player.html?bvid=BV1PC4y1t77X&page=1&danmaku=0&high_quality=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>
```

可以看到，它没有自适应屏幕，问了问度娘，看大佬给的解决方案，最后得到了这个。

<div style="position: relative; width: 100%; height: 0; padding-bottom: 75%;">
    <iframe src="//player.bilibili.com/player.html?bvid=BV1PC4y1t77X&page=1&danmaku=0&high_quality=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" style="position: absolute; width: 100%; height: 100%; left: 0; top: 0;"></iframe>
</div>

``` HTML 点击展开代码>folded
<div style="position: relative; width: 100%; height: 0; padding-bottom: 75%;">
    <iframe src="//player.bilibili.com/player.html?bvid=BV1PC4y1t77X&page=1&danmaku=0&high_quality=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" style="position: absolute; width: 100%; height: 100%; left: 0; top: 0;"></iframe>
</div>
```

可以说非常完美，基本可以适应各类大小。顺便我还找到了可以屏蔽链接跳转的一个小玩意。

<div style="position: relative; width: 100%; height: 0; padding-bottom: 75%;">
    <iframe src="//player.bilibili.com/player.html?bvid=BV1PC4y1t77X&page=1&danmaku=0&high_quality=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" style="position: absolute; width: 100%; height: 100%; left: 0; top: 0;" sandbox="allow-top-navigation allow-same-origin allow-forms allow-scripts"></iframe>
</div>

``` HTML 点击展开代码>folded
<div style="position: relative; width: 100%; height: 0; padding-bottom: 75%;">
    <iframe src="//player.bilibili.com/player.html?bvid=BV1PC4y1t77X&page=1&danmaku=0&high_quality=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" style="position: absolute; width: 100%; height: 100%; left: 0; top: 0;" sandbox="allow-top-navigation allow-same-origin allow-forms allow-scripts"></iframe>
</div>
```

但是目前由于播放器改版，上面的“去bilibili观看”去不掉。
