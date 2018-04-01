---
title: 类型、值、和变量
date: 2016-01-17 22:43:28
tags: [JavaScript, Note]
---

## 包装对象

先给一段代码来看看

```javascript
var s = 'hello' // s - "hello"
s.len = 4 // s.len - 4
var t = s.len // t - undefined
```

> **概念解释**：直接量并不是对象，但是为什么能像使用一个对象样的使用它呢，这是因为对于字符串、数字、布尔值，当你引用该直接量的属性（方法）时，JavaScript 会创建一个相应的**临时**对象，例如 `new String(s)`，引用属性（方法）完成后，创建的**临时对象就会被销毁**。

<!-- more -->

当运行这段代码以后，t 的值是 `undefined` 。第二行代码会创建一个临时字符串对象，并给其 `len` 属性赋值为 4，随机销毁这个对象。第三行运行的时候，相当于又通过原始的、不可变的 `s` 的值来创建了一个 `String`对象，并尝试读取一个不存在的属性 `len` 并将这个属性的值赋值给 `t`，此时当然结果为 `undefined`。这说明了一点：**在读取字符串、数字、布尔值的属性值或方法的时候，该直接量表现的就像是对象一样，但是如果尝试给其属性赋值，那么赋值的这个操作是发生在临时创建出来的对象身上，而该临时对象在操作完成后就被删除，原始的直接量并无发生任何变化！**

总结：**直接量能使用对应对象的属性（方法），但是只能读取，对直接量本身并无任何影响！即直接量是只读的！**

```javascript
var str = 'str',
  strObject = new String(str)

log(str == strObject) // true
log(str === strObject) // false

log(typeof str) // "string"
log(typeof strObject) // "object"
```

对于直接量和其包装对象，注意到他们的类型并不相同，直接量 `str` 对应的是 `"string"`，而包装对象 `strObject` 的是 `"object"`，两者在不严格的 `==` 模式下的比较结果为 `true`，在严格的 `===` 比较模式下为 `false`。
