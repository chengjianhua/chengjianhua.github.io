---
title: 初学者对 Servlet、JSP 及 Web 容器之间关系的理解
date: 2016-03-23 23:33:37
tags: [Java, JSP, Servlet, Container, Note]
---

`Servlet`就是一个 Java 程序，一个`Servlet`应用程序经常包含一个或者多个`Servlet`也就是当用户发送请求，例如提交表单，那么需要一个或多个`Servlet`协同作用，而访问的`jsp`页面也是一个`Servlet`。当每次我们发送请求时，`Servlet`应用程序中的`service()`方法就会被触发执行一次。当初次访问一个`Servlet`时，`init()`方法会触发执行一次，之后的请求都是执行`service()`方法。

<!-- more -->

如果你觉得奇怪，为什么没看到过`service()`这个方法，那是因为我们一般用的是通过继承`HttpServlet`来实现`Servlet`，而在`HttpServlet`中一般的请求我们只要`@override` `doGet()`和`doPost()`方法即可实现我们对请求的处理。而`HttpServlet`中的`service()`方法会根据请求的类型调用对应的`doGet()`、`doPost()`等等方法，所以只要实现`doGet()`和`doPost()`方法等等即可。

为什么说`jsp`也是一个`Servlet`呢，那是因为当我们使用`Servlet/JSP`容器时，例如最常用的`Tomcat`会将`jsp`文件转化成相应的一个`Servlet`程序，`jsp`页面的主体就转化成相应代码位于`service()`方法当中。`jsp`技术只是将开发变得简单，然而基本原理还是不变的，实现及其复杂的`Servlet`就由`Tomcat`这一类的容器来实现，我们只要实现`jsp`页面就可以了。

访问`Servlet`只需为地址添加映射到`Servlet`类即可或者是`@WebServlet`注解实现。

`Servlet`是一个接口，含有五个方法：

* `init`。仅在第一次访问 Servlet 时调用，之后不再调用。
* `service`。每次请求 Servlet 时，Servlet 容器都会调用这个方法。第一次调用 init，之后调用 service。这里编写 Servlet 要实现的处理代码。
* `destroy`。销毁 Servlet 时，Servlet 容器就会调用这个方法。
* `getServletInfo`……
* `getServletConfig`……

![类与接口](http://img.blog.csdn.net/20150905225924654)
