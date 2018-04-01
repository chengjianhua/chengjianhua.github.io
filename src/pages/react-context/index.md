---
title: React 中 context 的使用
date: 2016-05-24 1:02:13
tags: [react, 前端]
---

[官方文档说明（英）](https://facebook.github.io/react/docs/context.html)

看了别人写的中文博客，再看了官方英文文档，发现还是官方文档讲的浅显易懂一些，看了之后，半翻译半理解地写了这篇博客，更易于新手理解。

## 介绍

`context` 是在 `react @ 0.14` 版本以后发布的一个高级且实验性的功能，有可能在未来做出更改。不推荐频繁使用，如果使用的话尽量保持在小范围内并且避免直接使用 `context` 的 API，为了以后升级框架更加容易。

## 使用 Context 的原因

为了有时候想传递数据通过组件树，但是不想给每一层级的组件手动传递属性，那么 `context` 就能帮你 **"越级"** 传递数据到组件树中你想传递到的深层次组件。

有时候 `A组件` 为了给 `B组件` 中的 `C组件` 传递一个 `prop` ，而需要把参数在组件中传递两次才能最终将 `A组件` 中的 `prop` 传递给 `C组件`。

<!-- more -->

官方文档的示例代码如下

```javascript
var Button = React.createClass({
  render: function() {
    return (
      <button style={{ background: this.props.color }}>
        {this.props.children}
      </button>
    )
  },
})

var Message = React.createClass({
  render: function() {
    return (
      <div>
        {this.props.text} <Button color={this.props.color}>Delete</Button>
      </div>
    )
  },
})

var MessageList = React.createClass({
  render: function() {
    var color = 'purple'
    var children = this.props.messages.map(function(message) {
      return <Message text={message.text} color={color} />
    })
    return <div>{children}</div>
  },
})
```

## 使用 context 改进数据传递

现在我们使用 `context` 来完成参数的传递试试

```javascript
var Button = React.createClass({
  // 必须指定context的数据类型
  contextTypes: {
    color: React.PropTypes.string,
  },
  render: function() {
    return (
      <button style={{ background: this.context.color }}>
        {this.props.children}
      </button>
    )
  },
})

var Message = React.createClass({
  render: function() {
    return (
      <div>
        {this.props.text} <Button>Delete</Button>
      </div>
    )
  },
})

var MessageList = React.createClass({
  //
  childContextTypes: {
    color: React.PropTypes.string,
  },
  getChildContext: function() {
    return { color: 'purple' }
  },
  render: function() {
    var children = this.props.messages.map(function(message) {
      return <Message text={message.text} />
    })
    return <div>{children}</div>
  },
})
```

示例代码中通过添加 `childContextTypes` 和 `getChildContext()` 到 `MessageList` （`context` 的提供者），React 自动向下传递数据然后在组件树中的任意组件（也就是说任意子组件，在此示例代码中也就是 `Button`）都能通过定义 `contextTypes` 访问 `context` 中的数据。

**总结：** 指定数据并要将数据传递下去的父组件要定义 `childContextTypes` 和 `getChildContext()`；想要接收到数据的子组件 **必须定义** `contextTypes` 来使用传递过来的 `context`。
