---
title: Ubuntu 的正确使用方式
date: 2021-05-05 18:33:22
cover:
tags:
- Ubuntu
categories:
- 写BUG日常
- 资源
---
准备真的把 Ubuntu 当作日常操作系统？也许这篇文章可以帮助你
<!--more-->

## 软件安装

### 浏览器
* Chromium 网页浏览器

```bash
sudo snap install chromium
```

### 邮件
* Geary 邮件

```bash
sudo apt-get install geary
```

### 虚拟机
* VMware Workstastion

[下载](https://www.vmware.com/products/workstation-pro/workstation-pro-evaluation.html)
```bash
sudo chmod +x *.bundle
sudo ./*.bundle
```

## 依赖安装

### NPM
```bash
sudo apt-get install npm
sudo npm install -g npm
npm config set registry https://registry.npm.taobao.org #换源
```
### Nodejs
```bash
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash
exit
nvm install node
```
## 系统设置

### 8小时时差
```bash
sudo timedatectl set-local-rtc 1
```