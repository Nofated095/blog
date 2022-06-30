---
title: Ubuntu 安装 aria2 并配置
date: 2021-02-27
cover: https://pic.rmb.bdstatic.com/bjh/292af82583715d0ded5a48f96944391e.png
tags:
- Ubuntu
- aria2
- 下载
categories:
- 写BUG日常
- 野生技术协会
toc: true
---
Ubuntu 安装了 [Motrix](https://motrix.app)，好用是真好用，但是缺点就是我电脑太卡，启动它老费劲了。所以在这里把安装 aria2 的过程分享出来供大家参考
<!--more-->
{% raw %}<article class="message is-success"><div class="message-body">{% endraw %}
本文章需要你有执行 sudo 的权限
{% raw %}</div></article>{% endraw %}

## 安装

``` BASH BASH
sudo apt-get install aria2
```

## 配置

### 手动创建配置文件

``` BASH BASH
sudo mkdir /etc/aria2    #新建文件夹 
sudo touch /etc/aria2/aria2.session    #新建session文件
sudo chmod 777 /etc/aria2/aria2.session    #设置aria2.session可写 
sudo gedit /etc/aria2/aria2.conf    #创建配置文件
```

当然你也可以用一键命令行（

```  BASH BASH
sudo mkdir /etc/aria2 && sudo touch /etc/aria2/aria2.session && sudo chmod 777 /etc/aria2/aria2.session && sudo gedit /etc/aria2/aria2.conf
```

### 写入配置文件

如果一切正常的话，你应该已经打开了 Ubuntu 自带的 gedit。现在添加如下配置信息，当然你也可以自定义。

``` path /etc/aria2/aria2.conf >folded
## 全局设置 ## ============================================================
# 日志
#log-level=warn
#log=/PATH/.aria2/aria2.log

# 后台运行
#daemon=true

# 下载位置, 默认: 当前启动位置(***)
dir=/home/***/下载 

# 从会话文件中读取下载任务(***)
input-file=/etc/aria2/aria2.session

# 在Aria2退出时保存`错误/未完成`的下载任务到会话文件(***)
save-session=/etc/aria2/aria2.session

# 定时保存会话, 0为退出时才保存, 需1.16.1以上版本, 默认:0
save-session-interval=30

# 断点续传
continue=true

# 启用磁盘缓存, 0为禁用缓存, 需1.16以上版本, 默认:16M
#disk-cache=32M

# 文件预分配方式, 能有效降低磁盘碎片, 默认:prealloc
# 预分配所需时间: none < falloc ? trunc < prealloc
# falloc和trunc则需要文件系统和内核支持
# NTFS建议使用falloc, EXT3/4建议trunc, MAC 下需要注释此项
file-allocation=none
# 客户端伪装
user-agent=Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36

# 禁用IPv6, 默认:false
disable-ipv6=true

# 其他
always-resume=true
check-integrity=true

## 下载位置 ## ============================================================
# 最大同时下载任务数, 运行时可修改, 默认:5
max-concurrent-downloads=3

# 同一服务器连接数, 添加时可指定, 默认:1
max-connection-per-server=16

# 最小文件分片大小, 添加时可指定, 取值范围1M -1024M, 默认:20M
# 假定size=10M, 文件为20MiB 则使用两个来源下载; 文件为15MiB 则使用一个来源下载
min-split-size=10M

# 单个任务最大线程数, 添加时可指定, 默认:5
split=64

# 整体下载速度限制, 运行时可修改, 默认:0
#max-overall-download-limit=0

# 单个任务下载速度限制, 默认:0
#max-download-limit=0

# 整体上传速度限制, 运行时可修改, 默认:0
#max-overall-upload-limit=0

# 单个任务上传速度限制, 默认:0
#max-upload-limit=0

## RPC设置 ## ============================================================
# 启用RPC, 默认:false
enable-rpc=true

# 允许所有来源, 默认:false
rpc-allow-origin-all=true

# 允许非外部访问, 默认:false
rpc-listen-all=true

# 事件轮询方式, 取值:[epoll, kqueue, port, poll, select], 不同系统默认值不同
#event-poll=select

# RPC监听端口, 端口被占用时可以修改, 默认:6800
rpc-listen-port=6800

# 设置的RPC授权令牌, v1.18.4新增功能, 取代 --rpc-user 和 --rpc-passwd 选项
#rpc-secret=<TOKEN>

# 是否启用 RPC 服务的 SSL/TLS 加密,
# 启用加密后 RPC 服务需要使用 https 或者 wss 协议连接
#rpc-secure=true

# 在 RPC 服务中启用 SSL/TLS 加密时的证书文件,
# 使用 PEM 格式时，您必须通过 --rpc-private-key 指定私钥
#rpc-certificate=/path/to/certificate.pem

# 在 RPC 服务中启用 SSL/TLS 加密时的私钥文件
#rpc-private-key=/path/to/certificate.key

## BT/PT下载相关 ## ============================================================
# 当下载的是一个种子(以.torrent结尾)时, 自动开始BT任务, 默认:true
#follow-torrent=true

# BT监听端口, 当端口被屏蔽时使用, 默认:6881-6999
listen-port=51413

# 单个种子最大连接数, 默认:55
#bt-max-peers=55

# 打开DHT功能, PT需要禁用, 默认:true
enable-dht=false

# 打开IPv6 DHT功能, PT需要禁用
#enable-dht6=false

# DHT网络监听端口, 默认:6881-6999
#dht-listen-port=6881-6999

dht-file-path=/opt/var/aria2/dht.dat
dht-file-path6=/opt/var/aria2/dht6.dat

# 本地节点查找, PT需要禁用, 默认:false
#bt-enable-lpd=false

# 种子交换, PT需要禁用, 默认:true
enable-peer-exchange=false

# 每个种子限速, 对少种的PT很有用, 默认:50K
#bt-request-peer-speed-limit=50K

# 设置 peer id 前缀
peer-id-prefix=-TR2770-

# 当种子的分享率达到这个数时, 自动停止做种, 0为一直做种, 默认:1.0
seed-ratio=0

# 强制保存会话, 即使任务已经完成, 默认:false
# 较新的版本开启后会在任务完成后依然保留.aria2文件
#force-save=false

# BT校验相关, 默认:true
#bt-hash-check-seed=true

# 继续之前的BT任务时, 无需再次校验, 默认:false
bt-seed-unverified=true

# 保存磁力链接元数据为种子文件(.torrent文件), 默认:false
bt-save-metadata=true

bt-max-open-files=16

# Http/FTP 相关
connect-timeout=120
```
## 启动

``` BASH BASH
sudo aria2c --conf-path=/etc/aria2/aria2.conf
```

若没有报错证明安装成功，就可以 Ctrl+C 停止，将其转为后台运行

``` BASH BASH
sudo aria2c --conf-path=/etc/aria2/aria2.conf -D
```

## RPC

命令行肯定是不够的，所以这时候我们需要使用 aria2 的 RPC。

你可以在这里下载 [AriaNg](https://github.com/mayswind/AriaNg/releases)，推荐 All-in-one，可以直接提取出来放在桌面。不出意外的话，打开之后就可以自动对接到 aria2。
