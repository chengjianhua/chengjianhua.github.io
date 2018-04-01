---
title: 自定义Atom编辑器的样式
date: 2016-05-12 18:11:08
tags: [JavaScript, Note, Atom]
---

# Atom 自定义样式

Atom 作为新一代的文本编辑器，插件丰富，可定制化程度高。之前还没意识到这点，这次简单的实践了一下才体会到了。之前看着左侧的 “Tree View” 中的中文字体的显示默认为宋体，由于宋体显示的样子就是点阵式的样子，显得特别不和谐，锯齿感很严重，怎么看都不舒服，MarkDown 的预览界面也是如此，今天就把这两个字体都替换了一下，统一成“Microsoft YaHei”，心情舒畅了！

<!-- more -->

我们先要知道，因为 Atom 就是个使用浏览器内核编写的文本编辑器，所以一整个编辑器都能当作一个浏览器来看。所以我们能够使用 CSS 来定义样式，甚至还能通过打开开发者模式来审查元素（**View --> Developer --> Open In Dev Mode**）。所以接下来就让我们打开自定义样式表来修改我们想要的样子吧（**File --> Stylesheet**）。

![atom-stylesheet](http://7xs7xr.com1.z0.glb.clouddn.com/atom-stylesheet.png)

# Tree View

![Tree View 修改前的样子](http://7xs7xr.com1.z0.glb.clouddn.com/old-tree-view.png)

接下来让我们修改我们之前在样式表中看到的如下代码改成我们期望的

```css
.tree-view {
  // background-color: whitesmoke;
}
```
我们添加一个 `font-maily` 属性，并设置我们想要的字体

```css
.tree-view {
  // background-color: whitesmoke;
  font-family: Segoe UI ,Microsoft YaHei;
}
```
**注意：** 设置字体的时候有个技巧，如果设置字体的时候设置两个以上的字体的话，如上我们设置的。第一个字体将用于显示 **西文** 字体（英文字母、英文标点、阿拉伯数字……），然后遇到汉字之类不受第一个字体支持的字符集就按顺序使用第二个字体。所以 **通常我们可以使用这个特性来完成分别设定英文、中文字体。**

设置完成的效果如下

![设置后的tree view显示效果](http://7xs7xr.com1.z0.glb.clouddn.com/new-tree-view.png)

是不是看起来舒畅了许多，拯救强迫症！

# MarkDown Preview

我就不贴对比图了，但是这里有个小坑。当你使用审查元素得知 markdown-preview 界面的内容是被包裹在一个 `<div class="markdown-preview"> </div>` 中的时候，你会直接想设置 `.markdown-preview {font-family: Segoe UI ,Microsoft YaHei;}`，但是无效，我也不知道原因，但是在 Github 上找到了解决方案，如下所示

``` css
.markdown-preview.markdown-preview {
    font-family: "Segoe UI", "Microsoft YaHei"
}
```

这样就完成了，接下来给一张完成后的效果图

![](http://7xs7xr.com1.z0.glb.clouddn.com/mardown-preview-font-be-customized.png)

送给不喜欢宋体的同学们，更多小技巧再挖掘。
