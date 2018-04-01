---
title: 设置 SSH 使用 hexo deploy 时免输用户名密码
date: 2016-05-14 16:29:35
tags: [Atom, Hexo, trick]
---

# 设置 SSH 使用 hexo deploy 时免输用户名密码

此篇博客日期 `2016-05-14`，使用 `hexo v0.2.0`。介绍清楚这个使用背景是因为网上的有些教程已经过时，至少当我完全按照那些步骤来设置的时候并没有成功。SSH 验证就是我们键入命令 `hexo deploy` 以后，当那些需要提交的内容显示完成过后会弹出的一个小窗口提示我们输入用户名、密码。我参考了网上的一些教程，现在给出完整可行的教程，let's do it！

<!-- more -->
## 生成 SSH 密钥

首先打开命令行工具，通常我们可以直接右键鼠标任意位置打开 `Git Bash Here`，然后输入以下命令

``` cmd
$ cd ~/.ssh
# Checks to see if there is a directory named ".ssh" in your user directory
```

使用 `ssh-keygen` 生成密钥
``` cmd
$ ssh-keygen -t rsa -C "your_email@example.com"
# Creates a new ssh key using the provided email
Generating public/private rsa key pair.
Enter file in which to save the key (/home/you/.ssh/id_rsa):
```
使用默认的文件名直接enter，接下来显示如下
``` cmd
Enter passphrase (empty for no passphrase): [Type a passphrase]
Enter same passphrase again: [Type passphrase again]
```
按提示输入密码即可（简化流程的话在键入命令 `ssh-keygen -t rsa -C "your_email@example.com"` 以后的三次提示输入都可以直接回车跳过）。

密钥生成成功
``` cmd
Your identification has been saved in /home/you/.ssh/id_rsa.
Your public key has been saved in /home/you/.ssh/id_rsa.pub.
The key fingerprint is:
…………………此处是密钥内容…………………… your_email@example.com
```

## 设置 Github 项目的 Deploy keys

可以选择是在用户设置中添加密钥（Settings --> SSH GPG keys）还是单个项目中添加密钥，在这里我就在我们的博客项目中添加密钥，此处以我的博客为例。
在 `chengjianhua.github.io` 的首页菜单栏中点击 **Settings --> Deploy keys --> Add deploy key**，然后将生成的 `id_rsa.pub` 中的内容全选复制到 **key** 输入框中，然后点击 **Add key** 完成添加公钥。

接下来测试配置是否成功
``` cmd
$ ssh -T git@github.com
```
如果出现以下内容即表示配置完成并且成功！
``` cmd
Hi username! You've successfully authenticated, but GitHub does not
provide shell access.
```

## 设置博客的提交地址

到了这一个步骤和大家在网上搜到的其他教程就不一样了，网上的这一步就是设置
``` cmd
# 切入到包含 .git 文件夹的文件夹
$ cd .deploy/

# 查看当前的传输协议
$ git remote -v

origin  https://github.com/USERNAME/REPOSITORY.git (fetch)
origin  https://github.com/USERNAME/REPOSITORY.git (push)

# 修改 https 协议为 ssh 协议
$ git remote set-url origin git@github.com:USERNAME/REPOSITORY2.git
```

但是我根据网上的并没有用。更别提我的 blog 文件夹中包含 `.git` 文件夹的文件夹（好绕啊……）名字是 `.deploy_git` 了。还有我输入 `$ git remote -v` 时的显示结果为空，我尝试过自己添加 `$ git remote add origin git@github.com:chengjianhua/chengjianhua.github.io.git`,然后 `$ hexo deploy` 还是需要输入密码。

**解决办法出来了！**

在 `hexo deploy` 的控制台输出结果中我看到了链接仍然是 `https` 的链接，这时我想到了 `hexo` 的配置文件 `_config.yml` 中的 `deploy` 属性。

``` json
deploy:
  type: git
  repo: git@github.com:chengjianhua/chengjianhua.github.io.git
  branch: master
```

我将其中的 `repo`修改成了`git@github.com:chengjianhua/chengjianhua.github.io.git`，这个时候我再尝试了 `$ hexo deploy` 果然成功了，就不用输入密码了！

到此我的解决方法已经完成了，希望能帮到使用 `hexo` 的同学们~
