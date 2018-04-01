webpackJsonp([0xd22e59be3f26],{532:function(n,a){n.exports={data:{site:{siteMetadata:{title:"Blog - Jianhua Cheng",author:"Jianhua Cheng"}},markdownRemark:{id:"/Users/chengjianhua/Documents/codes/chengjianhua.github.io/src/pages/function-attributes-methods-constructor/index.md absPath of file >>> MarkdownRemark",html:'<p>函数也是对象，它们也可以拥有属性和方法，就像其他普通对象可以拥有属性和方法一样。</p>\n<h2>length 属性</h2>\n<p>在函数体中，<code class="language-text">arguments.length</code> 表示传入函数的实参的个数（也就是实际传入的参数的个数）。函数本身也有一个 <code class="language-text">length</code> 属性，这个属性为只读属性,它代表的是函数在定义时的形参的个数，也就是我们在函数调用时期望传入函数的参数个数。</p>\n<p>接下来用一段代码示例一下该属性的用法：</p>\n<!-- more -->\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">function</span> <span class="token function">check</span><span class="token punctuation">(</span>args<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">var</span> actual <span class="token operator">=</span> args<span class="token punctuation">.</span>length <span class="token comment">// 实参的真实个数</span>\n  <span class="token keyword">var</span> expected <span class="token operator">=</span> args<span class="token punctuation">.</span>callee<span class="token punctuation">.</span>length <span class="token comment">// 期望的参数的个数</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>actual <span class="token operator">!==</span> expected<span class="token punctuation">)</span>\n    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">\'Expected \'</span> <span class="token operator">+</span> expected <span class="token operator">+</span> <span class="token string">\'args; got \'</span> <span class="token operator">+</span> actual<span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> z<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token function">check</span><span class="token punctuation">(</span>arguments<span class="token punctuation">)</span>\n  <span class="token keyword">return</span> x <span class="token operator">+</span> y <span class="token operator">+</span> z\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<blockquote>\n<p><code class="language-text">arguments.callee</code>不能在严格模式下工作。<code class="language-text">arguments.callee</code> 代表当前正在执行的函数，该属性还能在匿名函数中递归调用自身。</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text"></code></pre>\n      </div>\n</blockquote>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">var factorial = function (x) {\n\tif (x &lt;= 1) return 1;\nreturn x * arguments.callee(x - 1);\n}</code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">## prototype 属性\n\n每一个函数都包含一个 `prototype` 属性，这个属性是指向一个对象的引用，这个对象称为“原型对象” （prototype object）。每一个函数都包含不同的原型对象。当将函数作为构造函数使用的时候，新创建的对象会从原型对象上继承属性。详细内容我会在另一篇文章中继续讨论。\n\n## call()方法和apply()方法\n\n我们可以将call()方法和apply()方法看做是某个对象的方法，通过调用方法的形式来间接调用。call()和apply()的第一个实参是要来调用call()或apply()的对象，第一个实参是调用上下文，在函数体中使用 `this` 来获得对它的引用。\n\n以对象o的方法来调用函数f()：\n\n```javascript\nf.call(o);\nf.apply(o);</code></pre>\n      </div>\n<blockquote>\n<ol>\n<li>严格模式中：\n<code class="language-text">call()</code>和<code class="language-text">apply()</code>的第一个实参都会变为 this 的值，哪怕传入的实参是原始值、<code class="language-text">null</code> 或 <code class="language-text">undefined</code>。</li>\n<li>非严格模式中：传入的 <code class="language-text">null</code> 和 <code class="language-text">undefined</code>都会被替代成全局对象,而其他的原始对象会被替代为相应的包装对象。</li>\n</ol>\n</blockquote>\n<p>call()和 apply()方法的主要不同在于它们在传入第一个实参（对象）后，传入后续该函数所需要的参数时的方式不同，接下来，让我们对比一下。</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">f.call(o, 1, 2);\nf.apply(o, [1,2]);</code></pre>\n      </div>\n<p>call()方法的函数参数的传入方式为：第一个上下文参数后的所有参数就是该函数实际上需要的实参。\napply()方法：后续的参数以数组的形式传入。</p>\n<p>主要区别就是 call()在传入上下文参数以后，函数本身需要多少个参数，那么<code class="language-text">f.call(context, arg1, arg2, arg3,arg4 ...)</code>在 contxt 之后就添加多少个参数。而 <code class="language-text">apply()</code> 则是 <code class="language-text">f.apply.(context, [arg1, arg2, arg3, arg4 ...])</code>。函数需要的参数包含在一个数组对象（也可以是类数组对象）中。<strong>实际编写过程中，可以将当前函数的 <code class="language-text">arguments</code> 对象传入另一个函数的 <code class="language-text">apply()</code> 来使用</strong>，示例如下：</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token comment">/**\n * [trace 将对象o中名为m的方法替换为另一个方法，该方法能够在调用原始的方法之前和之后记录日志消息]\n * @param  {[type]} o [要替换方法的对象]\n * @param  {[type]} m [需要替换的方法]\n */</span>\n<span class="token keyword">function</span> <span class="token function">trace</span><span class="token punctuation">(</span>o<span class="token punctuation">,</span> m<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">var</span> original <span class="token operator">=</span> o<span class="token punctuation">[</span>m<span class="token punctuation">]</span>\n\n  o<span class="token punctuation">[</span>m<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">\'Entering:\'</span><span class="token punctuation">,</span> m<span class="token punctuation">)</span> <span class="token comment">// 输出日志消息</span>\n    <span class="token keyword">var</span> result <span class="token operator">=</span> original<span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> arguments<span class="token punctuation">)</span> <span class="token comment">// 调用原始函数</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">\'Exiting:\'</span><span class="token punctuation">,</span> m<span class="token punctuation">)</span>\n    <span class="token keyword">return</span> result\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>',frontmatter:{title:"函数的属性、方法以及构造函数",date:"February 25, 2016"}}},pathContext:{slug:"/function-attributes-methods-constructor/",previous:{fields:{slug:"/js-equal-compare/js-equal-compare/"},frontmatter:{title:"JavaScript中 == 和 === 使用的区别"}},next:{fields:{slug:"/knowledges-about-jsp-servlet-container/"},frontmatter:{title:"初学者对 Servlet、JSP 及 Web 容器之间关系的理解"}}}}}});
//# sourceMappingURL=path---function-attributes-methods-constructor-df2f0e5b91d1dfcc396f.js.map