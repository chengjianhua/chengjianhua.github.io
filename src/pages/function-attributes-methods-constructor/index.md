---
title: 函数的属性、方法以及构造函数
date: 2016-02-25 10:38:54
tags: [JavaScript, Note, 前端]
---

函数也是对象，它们也可以拥有属性和方法，就像其他普通对象可以拥有属性和方法一样。


## length 属性

在函数体中，`arguments.length` 表示传入函数的实参的个数（也就是实际传入的参数的个数）。函数本身也有一个 `length` 属性，这个属性为只读属性,它代表的是函数在定义时的形参的个数，也就是我们在函数调用时期望传入函数的参数个数。

接下来用一段代码示例一下该属性的用法：

<!-- more -->

```javascript

function check(args) {
	var actual = args.length; // 实参的真实个数
	var expected = args.callee.length; // 期望的参数的个数
	if(actual !== expected)
		throw new Error("Expected " + expected + "args; got " + actual );

}

function f(x, y, z) {
	check(arguments);
	return x + y + z;
}

```

> `arguments.callee`不能在严格模式下工作。`arguments.callee` 代表当前正在执行的函数，该属性还能在匿名函数中递归调用自身。
> ```
	var factorial = function (x) {
		if (x <= 1) return 1;
	return x * arguments.callee(x - 1);
	}
 ```

## prototype 属性

每一个函数都包含一个 `prototype` 属性，这个属性是指向一个对象的引用，这个对象称为“原型对象” （prototype object）。每一个函数都包含不同的原型对象。当将函数作为构造函数使用的时候，新创建的对象会从原型对象上继承属性。详细内容我会在另一篇文章中继续讨论。

## call()方法和apply()方法

我们可以将call()方法和apply()方法看做是某个对象的方法，通过调用方法的形式来间接调用。call()和apply()的第一个实参是要来调用call()或apply()的对象，第一个实参是调用上下文，在函数体中使用 `this` 来获得对它的引用。

以对象o的方法来调用函数f()：

```javascript
f.call(o);
f.apply(o);
```

> 1. 严格模式中：
> 	`call()`和`apply()`的第一个实参都会变为this的值，哪怕传入的实参是原始值、`null` 或 `undefined`。
> 2. 非严格模式中：
> 	传入的 `null` 和 `undefined`都会被替代成全局对象,而其他的原始对象会被替代为相应的包装对象。

call()和apply()方法的主要不同在于它们在传入第一个实参（对象）后，传入后续该函数所需要的参数时的方式不同，接下来，让我们对比一下。

```
f.call(o, 1, 2);
f.apply(o, [1,2]);
```

call()方法的函数参数的传入方式为：第一个上下文参数后的所有参数就是该函数实际上需要的实参。
apply()方法：后续的参数以数组的形式传入。

主要区别就是call()在传入上下文参数以后，函数本身需要多少个参数，那么`f.call(context, arg1, arg2, arg3,arg4 ...)`在contxt之后就添加多少个参数。而 `apply()` 则是 `f.apply.(context, [arg1, arg2, arg3, arg4 ...])`。函数需要的参数包含在一个数组对象（也可以是类数组对象）中。**实际编写过程中，可以将当前函数的 `arguments` 对象传入另一个函数的 `apply()` 来使用**，示例如下：

```javascript
/**
 * [trace 将对象o中名为m的方法替换为另一个方法，该方法能够在调用原始的方法之前和之后记录日志消息]
 * @param  {[type]} o [要替换方法的对象]
 * @param  {[type]} m [需要替换的方法]
 */
function trace (o, m) {
	var original = o[m];

	o[m] = function () {
		console.log(new Date(), "Entering:", m); // 输出日志消息
		var result = original.apply(this, arguments); // 调用原始函数
		console.log(new Date(), "Exiting:", m);
		return result;
	}
}
```
