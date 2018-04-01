---
title: border 的使用指南及有趣的应用
date: 2016-05-25 01:03:26
tags: [JavaScript, Note, CSS]
---

```css
/* 1像素单位宽度的实心边框 */
border: 1px solid #000;
```

这是我们经常使用边框时写的代码，接下来清清楚楚的讲讲边框的详细设置，之后拓展一些有趣的应用。

<!-- more -->

## 属性设置

### border-width

`border` 的宽度设置上下左右时是按照顺时针方向来的，方便记忆（自从按照顺时针来记忆，所有的相关的 `margin`、 `padding` 等等的宽度设置我都记住了，作为新手的一个小 tip ）。

```css
/* border-width: width */
border-width: 5px;

/* vertical | horizontal */
border-width: 2px 1.5em;

/* top | horizontal | bottom */
border-width: 1px 2em 1.5cm;

/* top | right | bottom | left */
border-width: 1px 2em 0 4rem;

border-width: inherit;
```

### border-style

这个属性的设置是用来设置边框的样式，例如常用的 `solid（实线）`、 `dashed（虚线）`等等。

```css
/* 边框的样式将为虚线状 */
border-style: dashed;
```

### border-color

```css
/* 边框的颜色将变为黑色 */
border-color: #000;
```

设置边框的颜色（大家都知道，废话什么……），不过在网上学到了一个使用的小技巧与设置边框的颜色有关，待会在下面说明。

### border-radius

## 应用

<iframe height='431' scrolling='no' src='//codepen.io/chengjianhua/embed/aNeaRR/?height=431&theme-id=dark&default-tab=css,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='http://codepen.io/chengjianhua/pen/aNeaRR/'>border-radius handbook and usage</a> by Cheng Jianhua (<a href='http://codepen.io/chengjianhua'>@chengjianhua</a>) on <a href='http://codepen.io'>CodePen</a>.
</iframe>

## 总结

接下来让我强行总结一番。
