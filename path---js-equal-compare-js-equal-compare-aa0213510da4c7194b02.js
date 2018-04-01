webpackJsonp([70936622314407],{535:function(e,a){e.exports={data:{site:{siteMetadata:{title:"Blog - Jianhua Cheng",author:"Jianhua Cheng"}},markdownRemark:{id:"/Users/chengjianhua/Documents/codes/chengjianhua.github.io/src/pages/js-equal-compare/js-equal-compare.md absPath of file >>> MarkdownRemark",html:'<h1>JavaScript中 <code class="language-text">==</code> 和 <code class="language-text">===</code> 使用的区别</h1>\n<p>先明确一点，在JavaScript中<strong>对象的比较是引用的比较</strong>，而不是值的比较。对象和本身是相等的，和其他任何对象都是不相等的。</p>\n<blockquote>\n<p>变量名保存的是对象在内存中的引用地址，我们把创建的的对象赋值给我们声明的变量名时，就是将引用赋值给变量.</p>\n</blockquote>\n<p><code class="language-text">==</code> 和 <code class="language-text">===</code> 的区别在于，前者进行比较时会将两边的表达式的值按照规则进行类型转换后再来判断，而后者计算出两边的操作数的值后并不做类型转换，所以后者的比较是<strong>严格的判断类型与值的比较方式</strong>。</p>\n<h2><code class="language-text">===</code> 的使用</h2>\n<!-- more -->\n<ul>\n<li>\n<p>如果两个值类型不同，则他们不相等</p>\n</li>\n<li>\n<p><code class="language-text">NaN</code> 和任何值都不相等包括它本身，所以 <code class="language-text">NaN === NaN</code> 的结果为 <code class="language-text">false</code>，所以如果想要判断一个值是否为 <code class="language-text">NaN</code> 时，可以使用 <code class="language-text">x !== x</code>，该表达式的结果仅当 <code class="language-text">x</code> 为 <code class="language-text">NaN</code> 是的时候才为 <code class="language-text">true</code></p>\n</li>\n<li>\n<p>如果两个引用值指向同一个对象、数组或函数，则他们是相等的。如果指向不同的对象，则他们是不等的，尽管两个对象具有完全一样的属性</p>\n</li>\n</ul>\n<h2><code class="language-text">==</code> 的使用</h2>\n<p>如果两个操作数的类型相同，则和上述的严格相等的比较规则是一样的，结果是相同的。</p>\n<p>如果两个操作数的类型不同，将会按照以下规则进行类型转换：</p>\n<ul>\n<li>\n<p><code class="language-text">null == undefined</code></p>\n</li>\n<li>\n<p>如果比较数字与字符串，先将字符串转换成数字，然后比较两个数字的值是否相等</p>\n</li>\n<li>\n<p>如果其中一个值是 <code class="language-text">true</code> ，则将其转换为 <code class="language-text">1</code> 后再进行比较，<code class="language-text">false</code> 转换为 <code class="language-text">0</code></p>\n</li>\n<li>\n<p>如果一个值是对象，另一个值是数字或字符串时，JavaScript 语言内置类首先尝试使用 <code class="language-text">valueOf()</code>，再尝试使用 <code class="language-text">toString()</code>，除了日期类，日期类只使用 <code class="language-text">toString()</code> 转换。那些不是 JavaScript 语言核心中的对象则通过各自的实现中定义的方法转换为原始值</p>\n</li>\n<li>\n<p>其他不同类型之间的比较都不相等</p>\n</li>\n</ul>\n<h2>例子</h2>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token string">"1"</span> <span class="token operator">==</span> <span class="token boolean">true</span> <span class="token comment">// true</span>\n</code></pre>\n      </div>\n<p>布尔值 <code class="language-text">true</code> 首先转化为 <code class="language-text">1</code>，然后字符串 <code class="language-text">&quot;1&quot;</code>和 数字 <code class="language-text">1</code> 比较的时候转换成数字 <code class="language-text">1</code>，所以结果为 <code class="language-text">true</code></p>',frontmatter:{title:"JavaScript中 == 和 === 使用的区别",date:"February 01, 2016"}}},pathContext:{slug:"/js-equal-compare/js-equal-compare/",previous:{fields:{slug:"/js-learning-class/"},frontmatter:{title:"类型、值、和变量"}},next:{fields:{slug:"/function-attributes-methods-constructor/"},frontmatter:{title:"函数的属性、方法以及构造函数"}}}}}});
//# sourceMappingURL=path---js-equal-compare-js-equal-compare-aa0213510da4c7194b02.js.map