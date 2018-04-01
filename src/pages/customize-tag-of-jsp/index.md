---
title: 编写定制标签
date: 2016-03-24 00:00:39
tags: [Java, Note, tag]
---

定制标签的目的是分离表现逻辑和业务逻辑，可以在 JSP 页面编写中尽量不出现`scriptlet`，而且可以根据自己想要的功能定制属于自己想要的标签，完成特定的功能。

这里只讲在 JSP2.0 之后添加的一个用于编写定制标签的接口—— `SimpleTag` ，这个接口实现简单，效果也不错。

`SimpleTag`接口位于`javax.servlet.jsp.tagext`中，实现了该接口的标签处理器称作简单的标签处理器。`SimpleTag`接口中只有一个方法：`doTag()`，并且在标签调用时只执行一次。业务逻辑及主题操作代码都要在这里编写。

---

### 一个简单的标签处处理器的生命周期如下：

<!-- more -->

#### JSP 容器通过调用其无参构造函数，创建一个简单标签处理器实例。因此，简单的处理器必须有一个无参构造器。

#### JSP 容器调用`setJspCOntext`方法，同时传递一个`JspContext`对象。`JspContext`最重要的方法是`getOut`，它返回一个`JspWriter`，用于将响应发送到客户端。`setJspContext`方法的签名如下：

```java
public void setJspContext (JspContext jspContext)
```

大多数时候,需要将传进来的`JspContext`对象赋给一个类级变量，便于后续使用。

#### 如果表示标签处理器的定制标签是嵌套在另一个标签中的，JSP 容器就会调用`setParent`方法。该方法的签名如下：

```java
public void setParent(JspTag parent)
```

#### JSP 容器为该标签定义的每个属性都调用设置方法（Setters）

#### 如果标签中有主体内容，JSP 将调用`SimpleTag`接口中的`setJspBody`方法，将主体内容作为`JspFragment`传递。如果没有主体内容，JSP 容器将不会调用这个方法。

#### JSP 容器调用`doTag`方法。所有变量在`doTag`方法返回时同步。

---

**注：**`javax.servlet.jsp.tagext`包中也含有`SimpleTag`接口的一个支持类：`SimpleTagSupport`。`SimpleTagSupport`为`SimpleTag`接口中的所有方法都提供了默认实现（类似于适配器），我们可以继承它来编写一个简单的标签处理器。当 JSP 容器调用`SimpleTag`接口的`setJspContext`方法时，`SimpleTagSupport`类中的`getJspContext`方法将返回 JSP 容器传递的`JspContext`实例。

---

### 编写处理器

**为了编译标签处理器，需要在构建路径中包含`Servlet API` 和`JSP API`类包。例如`Tomcat`的`servlet-api.jar`文件和`jsp-api.jar`文件。**

```java
import java.io.IOException;

import javax.servlet.jsp.JspContext;
import javax.servlet.jsp.JspException;
import javax.servlet.jsp.tagext.JspFragment;
import javax.servlet.jsp.tagext.JspTag;
import javax.servlet.jsp.tagext.SimpleTag;

public class MyFirstTag implements SimpleTag {

	JspContext jspContext;

	@Override
	public void doTag() throws JspException, IOException {
		System.out.println("doTag");
		jspContext.getOut().print("This is my first tag.");
	}

	@Override
	public JspTag getParent() {
		System.out.println("getParent");
		return null;
	}

	@Override
	public void setJspBody(JspFragment body) {
		System.out.println("setJspBody");
	}

	@Override
	public void setJspContext(JspContext jspContext) {
		System.out.println("getJspContext");
		this.jspContext = jspContext;
	}

	@Override
	public void setParent(JspTag parent) {
		System.out.println("setParent");
	}

}
```

`MyFIrstTag`类有一个类型为`JspContext`的`jspContext`变量。`setJspContext`方法将它从 JSP 容器接收到的`JspContext`赋给这个变量。`doTag`方法利用`JspContext`获得一个`JspWriter`。然后调用`JspWriter`的`print`方法，输出*This is my first tag.*

### 注册标签

用一个以`.tld`为扩展名的 XML 文件描述标签处理器。以下示例`mytags.tld`：

```xml
<?xml version="1.0" encoding="UTF-8"?>
<taglib xmlns="http://java.sun.com/xml/ns/j2ee"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://java.sun.com/xml/ns/j2ee web-jsptaglibrary_2_1.xsd"
    version="2.1">

    <description>
         Simple tag examples
    </description>
    <tlib-version>1.0</tlib-version>
    <short-name>My First Taglib Example</short-name>
    <tag>
        <name>firstTag</name>
        <tag-class>customtag.MyFirstTag</tag-class>
		<body-content>empty</body-content>
    </tag>

    <tag>
        <name>dataFormatter</name>
        <tag-class>customtag.DataFormatterTag</tag-class>
        <body-content>empty</body-content>
        <attribute>
            <name>header</name>
            <required>true</required>
        </attribute>
        <attribute>
            <name>items</name>
            <required>true</required>
        </attribute>
    </tag>


    <tag>
        <name>select</name>
        <tag-class>customtag.SelectElementTag</tag-class>
        <body-content>scriptless</body-content>
    </tag>

</taglib>
```

标签类库描述符中的主要元素是`tag`，它用来描述标签，其中包含一个`name`元素和一个`tag--class`元素。`name`用于给该标签命名。`tag-class`用于指定标签处理器的全类名。一个`.tld`文件中可以包含多个`tag`元素。
`description`用于描述`tag`元素。`short-name`为标签的简称。`tlib-version`元素设置定制标签的版本。

###使用标签

```html
<%@ taglib uri="WEB-INF/mytags.tld" prefix="easy">
<html>
<head>
	<title>测试我的第一个标签</title>
</head>

<body>
Hello!<br/>
<easy:firstTag></easy:firstTag>
</body>
</html>
```

在控制台上将显示：

_setJspContext_

_doTag_
