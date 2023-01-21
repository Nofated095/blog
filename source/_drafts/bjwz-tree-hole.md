---
title: 开发树洞有感
date: 2023-01-22
cover: https://pic.rmb.bdstatic.com/bjh/a5a79c32320475bd69aed54f5371065a.png
tags:
- 总结
categories:
- [写 BUG 日常, 野生技术协会]
- [日常生活, 学业, 高中]
toc: true
---
记录北京五中树洞，立项 、开发、运营的过程。

<!--more-->

## 引言

今年 1 月份末，我在我们动漫社的微信群里水群的时候，一些同学提出了「表白墙」类似的话题，也就是一个类似于一个匿名的发帖站点。我马上就提出说这个东西可以做，然后马山脑子里面就想到了用 *Waline* 来做这个「表白墙」。同时也有一个同学（后称郑老师）想要来做树洞项目，于是他主动找到我 ~~（别问为什么是他找的我）~~，于是我们就开始着手开始做树洞项目。1 月 20 日，我在 *Vercel* 上部署了一个 *Waline* 实例。

## 关于消息推送的斟酌

这一部分在我认为是整个项目中最令人头疼的。因为这个面向的用户群体是真真正正的学生，是一群会用手机，喜欢**使用微信客户端的学生**。

所以这个让我头疼了好机会，因为 *Waline* 没有什么能够推送到微信的方法。一开始想的是微信公众号，但是根本不可能。于是后来郑老师搞了个企业微信，我便尝试通过企业微信来发消息推送。

但是后来再想想，通过企业微信群推送，还是不太现实。因为同学们必须得再注册一个企业微信，再加入企业，非常麻烦，~~根本不符合微信的小而美。~~

最后还是郑老师出的招，人工收集帖子然后发到他小号朋友圈。一开始我不是很喜欢这个方法，但是确实没有什么自动化的功能，考虑到那时候我觉得可能树洞项目会和我的博客评论一样冷清，于是便麻烦郑老师去手动转。

# 前端设计

后端是采用的 *Waline*，在事后的角度出发，当时选择他切切实实是没错的。但是前端设计将会怎样呢？

最开始我想的是直接用 *Waline Example*，也就是他部署完在根目录默认会提供的一个评论区示例。这个方法使用了一段时间我的眼睛就受不了了，又是默认英文，还有各种不顺眼的地方，而且空空荡荡，过于简洁，无法自定义其他内容，属实令人难蚌。

![]()

所以到最后，还是我出手写了前端，也不能算前端吧，就是一个 HTML 5 的页面，这样通过引入就可以实现固定内容 + 评论区这样的排版了。

>~~当然还是基于万能的 *Bulma CSS* 咯！甚至还是拿我 [Nofated095/nofated.win](https://github.com/Nofated095/nofated.win) 直接改的。~~

在简单修改完后，我们的前端变得好看一些了。这个时候已经是 1 月 20 日。在完成前端后，郑老师找到我，说准备大年初一的凌晨正式上线树洞，也就是 1 月 21 日（除夕夜）的凌晨。

在当时我其实有点想反对，因为在完成前端后，基本上就已经可以使用了。

有意思的是， 20 号夜里郑老师在动漫社微信群里水了一下树洞的开发情况，说明了要大年初一上线后，一大群同学们听说~~表白墙~~搞完了，纷纷提出要~~内测资格~~。而且真的想体验的人还很多，于是乎，~~迫于无奈，~~ 郑老师官宣了树洞的网址，大家可以在微信里内置浏览器里直接发帖。

## 分析与修改代码

[Clansty/Q2TG](https://github.com/Clansty/Q2TG) 的最新版本 `v3`，也就是 `rainbowcat` 是基于 *TypeScript* 开发的。那就开始吧！但是从哪里开始呢？在随意翻看了几个文件后，我将视线锁定在了 `tgUser` 这个变量上。~~因为写的真的太明显了，简直就是一眼丁真。~~

于是我尝试在 GitHub 搜索了一下，没想到就可以直接开始肝了（

![](https://imgsrc.baidu.com/super/pic/item/377adab44aed2e739f6b04e9c201a18b86d6fa71.jpg)

### ❌ 脑瘫思路 —— Undefined

分析了一下之后，我就打算开始着手删掉 `tgUser` 相关的内容。但在删到快一半的时候，我突然~~脑溢血地~~想到，如果我们在功能实现的部分保留所有的 `tgUser`，但是我们让他 `Undefined`，会不会就能直接非常方便地 disable 掉 User Bot 呢？（逃

然后我就真的大智若愚（大若智）地去试了。

很容易猜到 `tgUser` 应该是在机器人第一次配置的时候就被定义了，所以我就打算去 `SetupControlers.ts` 看看能不能在这里动动手脚，跳过里面地 User Bot 登录过程。

```ts SetupControlers.ts>folded
import Telegram from '../client/Telegram';
import SetupService from '../services/SetupService';
import { Api } from 'telegram';
import { getLogger, Logger } from 'log4js';
import { Button } from 'telegram/tl/custom/button';
import setupHelper from '../helpers/setupHelper';
import commands from '../constants/commands';
import { WorkMode } from '../types/definitions';
import OicqClient from '../client/OicqClient';
import { md5Hex } from '../utils/hashing';
import Instance from '../models/Instance';
import db from '../models/db';

export default class SetupController {
  private readonly setupService: SetupService;
  private readonly log: Logger;
  private isInProgress = false;
  private waitForFinishCallbacks: Array<(ret: { tgUser: Telegram, oicq: OicqClient }) => unknown> = [];
  // 创建的 UserBot
  private tgUser: Telegram;
  private oicq: OicqClient;

  constructor(private readonly instance: Instance,
              private readonly tgBot: Telegram) {
    this.log = getLogger(`SetupController - ${instance.id}`);
    this.setupService = new SetupService(this.instance, tgBot);
    tgBot.addNewMessageEventHandler(this.handleMessage);
    tgBot.setCommands(commands.preSetupCommands, new Api.BotCommandScopeUsers());
  }

  private handleMessage = async (message: Api.Message) => {
    if (this.isInProgress || !message.isPrivate) {
      return false;
    }

    if (message.text === '/setup' || message.text === '/start setup') {
      this.isInProgress = true;
      await this.doSetup(Number(message.sender.id));
      await this.finishSetup();
      return true;
    }

    return false;
  };

  private async doSetup(ownerId: number) {
    // 设置 owner
    try {
      await this.setupService.claimOwner(ownerId);
    }
    catch (e) {
      this.log.error('Claim Owner 失败', e);
      this.isInProgress = false;
      throw e;
    }
    // 设置工作模式
    let workMode: WorkMode | '' = '';
    try {
      while (!workMode) {
        const workModeText = await this.setupService.waitForOwnerInput('欢迎使用 Q2TG v2\n' +
          '请选择工作模式，关于工作模式的区别请查看<a href="https://github.com/Clansty/Q2TG#%E5%85%B3%E4%BA%8E%E6%A8%A1%E5%BC%8F">这里</a>', [
          [Button.text('个人模式', true, true)],
          [Button.text('群组模式', true, true)],
        ]);
        workMode = setupHelper.convertTextToWorkMode(workModeText);
      }
      this.setupService.setWorkMode(workMode);
    }
    catch (e) {
      this.log.error('设置工作模式失败', e);
      this.isInProgress = false;
      throw e;
    }
    // 登录 oicq
    try {
      let uin = NaN;
      while (isNaN(uin)) {
        uin = Number(await this.setupService.waitForOwnerInput('请输入要登录 QQ 号'));
      }
      const platformText = await this.setupService.waitForOwnerInput('请选择登录协议', [
        [Button.text('安卓手机', true, true)],
        [Button.text('安卓平板', true, true)],
        [Button.text('iPad', true, true)],
        [Button.text('macOS', true, true)],
      ]);
      const platform = setupHelper.convertTextToPlatform(platformText);
      let password = await this.setupService.waitForOwnerInput('请输入密码', undefined, true);
      password = md5Hex(password);
      this.oicq = await this.setupService.createOicq(uin, password, platform);
      this.instance.qqBotId = this.oicq.id;
      await this.setupService.informOwner(`登录成功`);
    }
    catch (e) {
      this.log.error('登录 OICQ 失败', e);
      this.isInProgress = false;
      throw e;
    }
    // 登录 tg UserBot
    if (this.instance.userSessionId) {
      await this.setupService.informOwner('userSessionId 已经存在，跳过');
    }
    else
      try {
        const phoneNumber = await this.setupService.waitForOwnerInput('创建 Telegram UserBot，请输入你的手机号码（需要带国家区号，例如：+86）');
        await this.setupService.informOwner('正在登录，请稍候…');
        this.tgUser = await this.setupService.createUserBot(phoneNumber);
        this.instance.userSessionId = this.tgUser.sessionId;
        await this.setupService.informOwner(`登录成功`);
      }
      catch (e) {
        this.log.error('创建 UserBot 失败', e);
        this.isInProgress = false;
        throw e;
      }
  }

  private async finishSetup() {
    this.tgBot.removeNewMessageEventHandler(this.handleMessage);
    this.isInProgress = false;
    await this.setupService.finishConfig();
    this.waitForFinishCallbacks.forEach(e => e({
      tgUser: this.tgUser,
      oicq: this.oicq,
    }));
  }

  public waitForFinish() {
    return new Promise<{ tgUser: Telegram, oicq: OicqClient }>(resolve => {
      this.waitForFinishCallbacks.push(resolve);
    });
  }
}
```

可以很清楚看到 *99 - 144* 行是注册 Telegram User Bot 的部分，那我们简单修改一下。

```diff 99 - 144
    // 登录 tg UserBot
    if (this.instance.userSessionId) {
      await this.setupService.informOwner('userSessionId 已经存在，跳过');
    }
-     else
-       try {
-         const phoneNumber = await this.setupService.waitForOwnerInput('创建 Telegram UserBot，请输入你的手机号码（需要带国家区号，例如：+86）');
-         await this.setupService.informOwner('正在登录，请稍候…');
-         this.tgUser = await this.setupService.createUserBot(phoneNumber);
-         this.instance.userSessionId = this.tgUser.sessionId;
-         await this.setupService.informOwner(`登录成功`);
-       }
+     else {
+       await this.setupService.informOwner('Telegram User Bot 创建过程跳过');
+     }
      catch (e) {
        this.log.error('创建 UserBot 失败', e);
        this.isInProgress = false;
        throw e;
      }
```

非常好，不是吗？于是我就乐呵的跑了 GitHub Actions 构建 Docker Image，然后发现居然还真构建成功了！于是我就更乐呵的去 `/setup` 我的机器人，没想到也正常跳过了！

当然这么改别的肯定是寄的，测试了一下转发功能完全废的。为什么相比也很清楚。~~你 `Undefined` 别的文件肯定不服会罢工啊！~~

### ✔️ 正确的打开方式 —— 扬了 tgUser

在经历了全程脑瘫的过程后，我终于稍微清醒和安分了一点，开始着手去删 `tgUser` 和与其相关的部分。

当然这里要非常感谢 [凌莞](https://github.com/Clansty)，看着亲爱的代码真是赏心悦目，如看代码眼暂冥，~~简直就是天籁~~。

在修改时，我发现 `personal` 代表个人模式，再结合 `tgUser` 的分布情况，可以很轻松的注释掉大部分有关代码，遇到与个人模式有关的部分都可以直接注释掉，只要符合语法就不会对群组模式产生奇奇怪怪的影响。

你可以在 [这里](https://github.com/Clansty/Q2TG/compare/rainbowcat...Nofated095:Q2TG:rainbowcat?expand=1) 找到我对 *Q2TG* 所有的修改。

## 功能测试

在构建 Image 完成后，我激动地~~关掉了 `v1` 的 Container~~ 在服务器上拉取并部署。

![部署过程](https://imgsrc.baidu.com/super/pic/item/b58f8c5494eef01fa2599500a5fe9925bd317da2.jpg)

![正常工作的瞬间](https://imgsrc.baidu.com/super/pic/item/4e4a20a4462309f7af2920d7370e0cf3d6cad6b5.jpg)

~~真是感动到让人落泪~~。

![文件转发](https://imgsrc.baidu.com/super/pic/item/2cf5e0fe9925bc31c1e08c5d1bdf8db1ca1370b2.jpg)

## 后记

这篇文章写于部署成功后的几天。经过了几天的功能测试，除了机器人无法检测 *Telegram* 删除的消息，需要用户对发出的消息编辑或回复 `/rm` 才能删除和撤回消息，但整体来看功能都是正常可以使用的，而且完全去除了 User Bot。

需要注意的是，去除了 User Bot 后，个人模式几乎无法工作。更多关于去 User Bot 的 Q2TG 项目的内容（包括部署方法、注意事项等）请查看 [Nofated095/Q2TG](https://github.com/Nofated095/Q2TG)。
