webpackJsonp([57338911205540],{539:function(e,a){e.exports={data:{site:{siteMetadata:{title:"Blog - Jianhua Cheng",author:"Jianhua Cheng"}},markdownRemark:{id:"/Users/chengjianhua/Documents/codes/chengjianhua.github.io/src/pages/first-triage-to-unite-test-in-mocha/index.md absPath of file >>> MarkdownRemark",html:'<h2>Chai</h2>\n<p>在和 <code class="language-text">jest</code> 作比较的时候, 两者主要的不同就是 <code class="language-text">jest</code> 的集成度比较高内置断言库, 而 <code class="language-text">mocha</code> 需要搭配额外的断言库, 在此选择了比较流行的 <code class="language-text">chai</code> 作为断言库.</p>\n<h3>风格的选择</h3>\n<p>其中 <code class="language-text">chai</code> 又有好几种断言风格, 我们经常见到的其实就是 <em>BDD</em> 风格的 <code class="language-text">should / expect</code>.</p>\n<p>其中我较喜欢 <code class="language-text">should</code>, 因为它可以直接以属性的方式嵌入所有内置原生对象, 所以可以很方便的以 <code class="language-text">variable.should.equal(someValue)</code> 的形式来书写断言, 和 <code class="language-text">expect</code> 相比较可以省略一对 <code class="language-text">()</code> … 如果是 <code class="language-text">expect</code> 风格的话, 上述示例代码等价于 <code class="language-text">expect(variable).to.equal(someValue)</code>. 在一般情况下两者的使用时几乎相同的, <code class="language-text">expect</code> 作为断言的开始, <code class="language-text">should</code> 接在想要断言的变量之后. 但是有一些地方 <code class="language-text">should</code> 就需要变换一下我上述所说的写法了.</p>\n<!--more-->\n<h4>Should</h4>\n<p><code class="language-text">should</code> 实际上是给所有的对象都扩充了一个 <code class="language-text">getter</code> 属性 <code class="language-text">should</code>, 如果你想在浏览器中运行测试的话, <code class="language-text">should</code> 在 IE 浏览器中会有一些问题. 正是因为 <code class="language-text">should</code> 是扩充了 <code class="language-text">Object.prototype</code>, 所以如果变量的值为 <code class="language-text">null</code> 或 <code class="language-text">undefined</code> 的时候, 是无法使用 <code class="language-text">.should.equal()</code> 的形式的, 因为 <code class="language-text">null</code>, <code class="language-text">undefined</code> 的原型不是 <code class="language-text">Object</code>,所以<code class="language-text">should</code> 不存在. 所以此时应当如下所示使用.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">const</span> sould <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'chai\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">should</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token operator">...</span>\n\nshould<span class="token punctuation">.</span>not<span class="token punctuation">.</span>exist<span class="token punctuation">.</span><span class="token punctuation">(</span>variable<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// variable 的值不应该是 null 或者 undefined</span>\n</code></pre>\n      </div>\n<h2>Mocha</h2>\n<p>现在我们来看看如何对 <code class="language-text">mocha</code> 进行配置以及上手的步骤. 我假定在 <code class="language-text">mocha</code> 中写测试的时候也同样需要使用 ES6 语法, 还有一个关注点是如果我在 <code class="language-text">webpack.config.js</code> 中已经设置了 <code class="language-text">alias</code>, 那么在写测试代码的时候, 我希望导入的文件也可以使用 <code class="language-text">alias</code> 来保持我路径的一致性以及与此同时带来的便利性.</p>\n<h3>配置</h3>\n<h4>下载依赖</h4>\n<div class="gatsby-highlight">\n      <pre class="language-shell"><code class="language-shell">npm install --save-dev mocha chai</code></pre>\n      </div>\n<p>接下来只要在项目根目录下新建文件夹 <code class="language-text">test</code>, 在里面写的测试文件以 <code class="language-text">*.test.js</code> 命名, 接下来在 <code class="language-text">packag.json</code> 文件中 配置 <code class="language-text">npm test</code> 命令.</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">&quot;npm test&quot;: &quot;./node_modules/.bin/mocha&quot;</code></pre>\n      </div>\n<p>还可以在 <code class="language-text">test</code> 根目录下新建一个配置文件 <code class="language-text">mocha.opts</code>, 其中配置的选项相当于给 <code class="language-text">mocha</code> 命令加入了命令行参数.</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">--recursive\n--ui bdd</code></pre>\n      </div>\n<p>具体的配置请参照文档 <a href="http://mochajs.org/#usage">Mocha - USAGE</a>.</p>\n<p>之后在终端输入 <code class="language-text">npm run test</code> 即可运行测试.</p>\n<h4>支持 ES6</h4>\n<p>上述只是配置好了基本的运行环境, 如果需要支持 ES6 的话, 那么还需要两个简单的步骤.</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">npm install --save-dev babel-register</code></pre>\n      </div>\n<p>然后修改 <code class="language-text">mocha.opts</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">--recursive\n--ui bdd\n--require babel-register</code></pre>\n      </div>\n<p>完成, 现在已经支持 ES6 语法了.</p>\n<h4>支持 Webpack 的 Alias</h4>\n<p>如果不需要请跳过此步骤, 需要的推荐一个本人基于一个开源库修改的 babel 插件 <a href="https://github.com/chengjianhua/babel-plugin-webpack-alias-resolve"><code class="language-text">babel-plugin-webpack-alias-resolve</code></a>.</p>\n<h3>写测试</h3>\n<p>直接上代码! 有一个对 <code class="language-text">axios</code> 经过封装的 <code class="language-text">ajax</code> 函数, 我现在对其进行测试. 下面是代码在 Gist 的地址 <a href="https://gist.github.com/chengjianhua/08356304f95f477dba6f3cb977a6aa08">the test for ajax which based on axios</a></p>\n<h2>结束</h2>\n<p>写的很少 … 正在实践当中, 其实测试上述那个文件的时候我已经踩了一些坑了, 但是写出来还是不够多, 等踩多了总结一下踩过的那些<strong>坑</strong>.</p>',frontmatter:{title:"Mocha 和 Chai 入门初探",date:"December 14, 2016"}}},pathContext:{slug:"/first-triage-to-unite-test-in-mocha/",previous:{fields:{slug:"/first-internship-experience/"},frontmatter:{title:"第一次的实习经验"}},next:{fields:{slug:"/fe-unit-testing-practice/"},frontmatter:{title:"前端单元测试实践"}}}}}});
//# sourceMappingURL=path---first-triage-to-unite-test-in-mocha-74d7f53fa9627832586a.js.map