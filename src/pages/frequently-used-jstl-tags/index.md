---
title: 常用的 JSTL 标签
date: 2016-03-23 23:44:33
tags: [JSTL, Java, Note, 后端]
---

### 1.`out`标签

```
<c:out value="value" [escapeXml="{true|false}"] [default="defaultValue"]/>

//括号中的内容为可选项
```

```
<c:out value="value" [escapeXml="{true|false}"]>
	defaultValue
</c:out>
```

**注意：**如果`escapeXml`值为`true`的话，那么`value`中的字符串中包含的",&,',<,>等等特殊字符将会被转化成对应的字符实体代码 `&#034;` `&amp;` `&#039;` `&lt;` `&gt;`

`EL`函数中类似的用法:

```
${fn:escapeXml("Use <br> to change lines")}
```

### 2.`foreach`标签

<!-- more -->

```
<c:forEach items="collection" [var="varName"] [begin="begin"] [end="end"] [step="step"] [varStatus="varStatusName"]>
	body content
</c:forEach>
```

**注意：** 1. `items`表示需要迭代的对象集合，可以迭代的对象包括所有的`java.util.Iterator`和`java.util.Map`接口的实现，以及对象或者基本类型的数组。 2. `varStatus`返回当前迭代的次数，类似于在 for 循环中 int i 的递增 3. `begin` 可以指定迭代开始的索引 4. `end`可以指定迭代结束的索引 5. `step`表示迭代的索引递增的步长，如果该值要有的话必须大于等于 1

### 3.`if`标签

    没有主体内容的形式，在这种情况下，var指定的限域变量一般由同一个JSP页面中更后面的另一个标签的测试所决定

```
<c:if test="testCondition" var="varName" [scope="{page|request|session|application}"]/>
```

有主体内容为 JSP 的，如果测试结果为 true，主体内容就会得到处理，否则不处理。

```
<c:if test="testCondition" [var="varName"] [scope="{page|request|session|application}"]>
	body content
</c:if>
```

### 4.`formatDate`标签

完整语法格式：

```
<fmt:formatDate value = "date"
	[type="{time|date|both}"]
	[dateStyle="{default|short|medium|long|full}"]
	[timeStyle="{default|short|medium|long|full}"]
	[pattern="customPattern"]
	[timeZone="timeZone"]
	[var="varName"]
	[scope="{page|request|session|application}"]
/>
```

使用示例：

```
<fmt:formatDate value="<%=new Date()%>" type="both" pattern="yyyy年MM月dd日 hh小时mm分钟ss秒" />
//效果显示：2015年9月10日 22小时06分10秒
```

**以上是使用的最多的几个，几乎是一个网站制作过程必然用到的，剩下的一些好用的标签但不是那么常用的以后再补充。**
