---
title: WebSocket 原理
date: 2016-05-12 10:43:12
tags: [JavaScript, Note]
---

## 背景

以前的网站为了实现**推送**功能，使用的方法都是**轮询**。所谓的轮询就是在特定的时间间隔（例如 1 秒），由浏览器向服务器发出一个 `Http request`，然后服务器返回最新的数据给客户端浏览器，从而给出一种服务端实时推送的假象。由于`Http Request`的`Header`（请求头）很长,而传输的数据可能很短就只占一点点，每次请求消耗的带宽大部分都消耗在 `Header`上。从网上资料得知后来还有改进的轮询方法叫做 `Comet`，使用 `Ajax`。但这种技术虽然可达到双向通信，但依然需要发出请求，而且在 Comet 中，普遍采用了长链接，这也会大量消耗服务器带宽和资源。

所以 HTML5 定义了 `WebSocket` 协议，以及相关的编程 API，能更好的实现双向通信且节省服务器资源和带宽。

<!-- more -->

> **注意**： `WebSocket` 实际上指的是一种协议，与我们熟知的 `Http` 协议是同等的一个网络协议。用网络模型结构来解释的话， `WebSocket` 和 `Http` 协议都属于 `应用层协议`，两者都基于传输层协议 `TCP`。

## WebSocket 协议

### 与 HTML5 的联系

Html5 是指的一系列新的 API，或者说新规范，新技术。在这个新规范中定义了一个为了实现双向实时通信的新协议 `WebSocket`，并且提供了一套 JavaScript API 供开发者来调用实现通信。服务器端的实现由诸如：Tomcat、Jetty 等等。

### 与 Http 协议的联系

简单概括来看： `WebSocket` 不是 `Http` 协议， `Http` 协议只是被 `WebSocket` 使用来建立 `WebSocket` 连接，连接建立了以后客户端与服务器的双向通信就与 `Http` 无关了。

`WebSocket` 协议和 `HTTP` 协议是两种不同的东西，它们的联系如下：

> 客户端开始建立 WebSocket 连接时要发送一个 header 标记了 Upgrade 的 HTTP 请求，表示请求协议升级。所以服务器端做出响应的简便方法是，直接在现有的 HTTP 服务器软件和现有的端口上实现 WebSocket 协议，重用现有代码（比如解析和认证这个 HTTP 请求。如果在 TCP 协议上实现，这两个功能就要重新实现），然后再回一个状态码为 101 的 HTTP 响应完成握手，再往后发送数据时就没 HTTP 的事了。

> 作者：长天之云链接：https://www.zhihu.com/question/20215561/answer/14365823
> 来源：知乎著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处.

### 例子

下面给出发出建立连接请求时的 `request` 和 `response`。

**注意：下面的请求报文与响应报文中的内容不是完整的报文，而是 `WebSocket` 基于 `Http` 请求（响应）报文添加的内容。**

浏览器请求

```html
GET / HTTP/1.1
Upgrade: websocket
Connection: Upgrade
Host: example.com
Origin: null
Sec-WebSocket-Key: sN9cRrP/n9NdMgdcy2VJFQ==
Sec-WebSocket-Version: 13
```

服务器回应

```html
HTTP/1.1 101 Switching Protocols
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Accept: fFBooB7FAkLlXgRSz0BT3v4hq5s=
Sec-WebSocket-Origin: null
Sec-WebSocket-Location: ws://example.com/
```
