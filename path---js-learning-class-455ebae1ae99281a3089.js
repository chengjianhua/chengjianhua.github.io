webpackJsonp([0xbec63537bf3c],{547:function(s,a){s.exports={data:{site:{siteMetadata:{title:"Blog - Jianhua Cheng",author:"Jianhua Cheng"}},markdownRemark:{id:"/Users/chengjianhua/Documents/codes/chengjianhua.github.io/src/pages/js-learning-class/index.md absPath of file >>> MarkdownRemark",html:'<h2 id="包装对象"><a href="#%E5%8C%85%E8%A3%85%E5%AF%B9%E8%B1%A1" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>包装对象</h2>\n<p>先给一段代码来看看</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">var</span> s <span class="token operator">=</span> <span class="token string">\'hello\'</span> <span class="token comment">// s - "hello"</span>\ns<span class="token punctuation">.</span>len <span class="token operator">=</span> <span class="token number">4</span> <span class="token comment">// s.len - 4</span>\n<span class="token keyword">var</span> t <span class="token operator">=</span> s<span class="token punctuation">.</span>len <span class="token comment">// t - undefined</span>\n</code></pre>\n      </div>\n<blockquote>\n<p><strong>概念解释</strong>：直接量并不是对象，但是为什么能像使用一个对象样的使用它呢，这是因为对于字符串、数字、布尔值，当你引用该直接量的属性（方法）时，JavaScript 会创建一个相应的<strong>临时</strong>对象，例如 <code class="language-text">new String(s)</code>，引用属性（方法）完成后，创建的<strong>临时对象就会被销毁</strong>。</p>\n</blockquote>\n<!-- more -->\n<p>当运行这段代码以后，t 的值是 <code class="language-text">undefined</code> 。第二行代码会创建一个临时字符串对象，并给其 <code class="language-text">len</code> 属性赋值为 4，随机销毁这个对象。第三行运行的时候，相当于又通过原始的、不可变的 <code class="language-text">s</code> 的值来创建了一个 <code class="language-text">String</code>对象，并尝试读取一个不存在的属性 <code class="language-text">len</code> 并将这个属性的值赋值给 <code class="language-text">t</code>，此时当然结果为 <code class="language-text">undefined</code>。这说明了一点：<strong>在读取字符串、数字、布尔值的属性值或方法的时候，该直接量表现的就像是对象一样，但是如果尝试给其属性赋值，那么赋值的这个操作是发生在临时创建出来的对象身上，而该临时对象在操作完成后就被删除，原始的直接量并无发生任何变化！</strong></p>\n<p>总结：<strong>直接量能使用对应对象的属性（方法），但是只能读取，对直接量本身并无任何影响！即直接量是只读的！</strong></p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">var</span> str <span class="token operator">=</span> <span class="token string">\'str\'</span><span class="token punctuation">,</span>\n  strObject <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span>\n\n<span class="token function">log</span><span class="token punctuation">(</span>str <span class="token operator">==</span> strObject<span class="token punctuation">)</span> <span class="token comment">// true</span>\n<span class="token function">log</span><span class="token punctuation">(</span>str <span class="token operator">===</span> strObject<span class="token punctuation">)</span> <span class="token comment">// false</span>\n\n<span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> str<span class="token punctuation">)</span> <span class="token comment">// "string"</span>\n<span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> strObject<span class="token punctuation">)</span> <span class="token comment">// "object"</span>\n</code></pre>\n      </div>\n<p>对于直接量和其包装对象，注意到他们的类型并不相同，直接量 <code class="language-text">str</code> 对应的是 <code class="language-text">&quot;string&quot;</code>，而包装对象 <code class="language-text">strObject</code> 的是 <code class="language-text">&quot;object&quot;</code>，两者在不严格的 <code class="language-text">==</code> 模式下的比较结果为 <code class="language-text">true</code>，在严格的 <code class="language-text">===</code> 比较模式下为 <code class="language-text">false</code>。</p>',frontmatter:{title:"类型、值、和变量",date:"January 17, 2016"}}},pathContext:{slug:"/js-learning-class/",previous:!1,next:{fields:{slug:"/js-equal-compare/js-equal-compare/"},frontmatter:{title:"JavaScript中 == 和 === 使用的区别"}}}}}});
//# sourceMappingURL=path---js-learning-class-455ebae1ae99281a3089.js.map