---
title: Mocha 和 Chai 入门初探
date: 2016-12-14 17:14:44
tags: [Note, mocha, JavaScript]
---

# Mocha 和 Chai 入门初探

## Chai

在和 `jest` 作比较的时候, 两者主要的不同就是 `jest` 的集成度比较高内置断言库, 而 `mocha` 需要搭配额外的断言库, 在此选择了比较流行的 `chai` 作为断言库.

### 风格的选择

其中 `chai` 又有好几种断言风格, 我们经常见到的其实就是 *BDD* 风格的 `should / expect`.

其中我较喜欢 `should`, 因为它可以直接以属性的方式嵌入所有内置原生对象, 所以可以很方便的以 `variable.should.equal(someValue)` 的形式来书写断言, 和 `expect` 相比较可以省略一对 `()` ... 如果是 `expect` 风格的话, 上述示例代码等价于 `expect(variable).to.equal(someValue)`. 在一般情况下两者的使用时几乎相同的, `expect` 作为断言的开始, `should` 接在想要断言的变量之后. 但是有一些地方 `should` 就需要变换一下我上述所说的写法了.

<!--more-->

#### Should

`should` 实际上是给所有的对象都扩充了一个 `getter` 属性 `should`, 如果你想在浏览器中运行测试的话, `should` 在 IE 浏览器中会有一些问题. 正是因为 `should` 是扩充了 `Object.prototype`, 所以如果变量的值为 `null` 或 `undefined` 的时候, 是无法使用 `.should.equal()` 的形式的, 因为 `null`, `undefined` 的原型不是 `Object`,所以`should` 不存在. 所以此时应当如下所示使用.

```javascript
const sould = require('chai').should();

...

should.not.exist.(variable); // variable 的值不应该是 null 或者 undefined
```

## Mocha

现在我们来看看如何对 `mocha` 进行配置以及上手的步骤. 我假定在 `mocha` 中写测试的时候也同样需要使用 ES6 语法, 还有一个关注点是如果我在 `webpack.config.js` 中已经设置了 `alias`, 那么在写测试代码的时候, 我希望导入的文件也可以使用 `alias` 来保持我路径的一致性以及与此同时带来的便利性.

### 配置

#### 下载依赖

```shell
npm install --save-dev mocha chai
```

接下来只要在项目根目录下新建文件夹 `test`, 在里面写的测试文件以 `*.test.js` 命名, 接下来在 `packag.json` 文件中 配置 `npm test` 命令.

```
"npm test": "./node_modules/.bin/mocha"
```

还可以在 `test` 根目录下新建一个配置文件 `mocha.opts`, 其中配置的选项相当于给 `mocha` 命令加入了命令行参数.

```
--recursive
--ui bdd
```

具体的配置请参照文档 [Mocha - USAGE](http://mochajs.org/#usage).

之后在终端输入 `npm run test` 即可运行测试.
#### 支持 ES6

上述只是配置好了基本的运行环境, 如果需要支持 ES6 的话, 那么还需要两个简单的步骤.

```
npm install --save-dev babel-register
```

然后修改 `mocha.opts`

```
--recursive
--ui bdd
--require babel-register
```

完成, 现在已经支持 ES6 语法了.

#### 支持 Webpack 的 Alias

如果不需要请跳过此步骤, 需要的推荐一个本人基于一个开源库修改的 babel 插件 [`babel-plugin-webpack-alias-resolve`](https://github.com/chengjianhua/babel-plugin-webpack-alias-resolve).

### 写测试

直接上代码! 有一个对 `axios` 经过封装的 `ajax` 函数, 我现在对其进行测试. 下面是代码在 Gist 的地址 [the test for ajax which based on axios](https://gist.github.com/chengjianhua/08356304f95f477dba6f3cb977a6aa08)

## 结束

写的很少 ... 正在实践当中, 其实测试上述那个文件的时候我已经踩了一些坑了, 但是写出来还是不够多, 等踩多了总结一下踩过的那些**坑**.