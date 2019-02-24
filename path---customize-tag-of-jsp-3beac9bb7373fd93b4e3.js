webpackJsonp([0x974a022bef0],{540:function(a,n){a.exports={data:{site:{siteMetadata:{title:"Blog - Jianhua Cheng",author:"Jianhua Cheng"}},markdownRemark:{id:"/Users/chengjianhua/Documents/codes/chengjianhua.github.io/src/pages/customize-tag-of-jsp/index.md absPath of file >>> MarkdownRemark",html:'<p>定制标签的目的是分离表现逻辑和业务逻辑，可以在 JSP 页面编写中尽量不出现<code class="language-text">scriptlet</code>，而且可以根据自己想要的功能定制属于自己想要的标签，完成特定的功能。</p>\n<p>这里只讲在 JSP2.0 之后添加的一个用于编写定制标签的接口—— <code class="language-text">SimpleTag</code> ，这个接口实现简单，效果也不错。</p>\n<p><code class="language-text">SimpleTag</code>接口位于<code class="language-text">javax.servlet.jsp.tagext</code>中，实现了该接口的标签处理器称作简单的标签处理器。<code class="language-text">SimpleTag</code>接口中只有一个方法：<code class="language-text">doTag()</code>，并且在标签调用时只执行一次。业务逻辑及主题操作代码都要在这里编写。</p>\n<hr>\n<h3 id="一个简单的标签处处理器的生命周期如下："><a href="#%E4%B8%80%E4%B8%AA%E7%AE%80%E5%8D%95%E7%9A%84%E6%A0%87%E7%AD%BE%E5%A4%84%E5%A4%84%E7%90%86%E5%99%A8%E7%9A%84%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E5%A6%82%E4%B8%8B%EF%BC%9A" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>一个简单的标签处处理器的生命周期如下：</h3>\n<!-- more -->\n<h4 id="jsp-容器通过调用其无参构造函数，创建一个简单标签处理器实例。因此，简单的处理器必须有一个无参构造器。"><a href="#jsp-%E5%AE%B9%E5%99%A8%E9%80%9A%E8%BF%87%E8%B0%83%E7%94%A8%E5%85%B6%E6%97%A0%E5%8F%82%E6%9E%84%E9%80%A0%E5%87%BD%E6%95%B0%EF%BC%8C%E5%88%9B%E5%BB%BA%E4%B8%80%E4%B8%AA%E7%AE%80%E5%8D%95%E6%A0%87%E7%AD%BE%E5%A4%84%E7%90%86%E5%99%A8%E5%AE%9E%E4%BE%8B%E3%80%82%E5%9B%A0%E6%AD%A4%EF%BC%8C%E7%AE%80%E5%8D%95%E7%9A%84%E5%A4%84%E7%90%86%E5%99%A8%E5%BF%85%E9%A1%BB%E6%9C%89%E4%B8%80%E4%B8%AA%E6%97%A0%E5%8F%82%E6%9E%84%E9%80%A0%E5%99%A8%E3%80%82" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>JSP 容器通过调用其无参构造函数，创建一个简单标签处理器实例。因此，简单的处理器必须有一个无参构造器。</h4>\n<h4 id="jsp-容器调用code-classlanguage-textsetjspcontextcode方法，同时传递一个code-classlanguage-textjspcontextcode对象。code-classlanguage-textjspcontextcode最重要的方法是code-classlanguage-textgetoutcode，它返回一个code-classlanguage-textjspwritercode，用于将响应发送到客户端。code-classlanguage-textsetjspcontextcode方法的签名如下："><a href="#jsp-%E5%AE%B9%E5%99%A8%E8%B0%83%E7%94%A8code-classlanguage-textsetjspcontextcode%E6%96%B9%E6%B3%95%EF%BC%8C%E5%90%8C%E6%97%B6%E4%BC%A0%E9%80%92%E4%B8%80%E4%B8%AAcode-classlanguage-textjspcontextcode%E5%AF%B9%E8%B1%A1%E3%80%82code-classlanguage-textjspcontextcode%E6%9C%80%E9%87%8D%E8%A6%81%E7%9A%84%E6%96%B9%E6%B3%95%E6%98%AFcode-classlanguage-textgetoutcode%EF%BC%8C%E5%AE%83%E8%BF%94%E5%9B%9E%E4%B8%80%E4%B8%AAcode-classlanguage-textjspwritercode%EF%BC%8C%E7%94%A8%E4%BA%8E%E5%B0%86%E5%93%8D%E5%BA%94%E5%8F%91%E9%80%81%E5%88%B0%E5%AE%A2%E6%88%B7%E7%AB%AF%E3%80%82code-classlanguage-textsetjspcontextcode%E6%96%B9%E6%B3%95%E7%9A%84%E7%AD%BE%E5%90%8D%E5%A6%82%E4%B8%8B%EF%BC%9A" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>JSP 容器调用<code class="language-text">setJspCOntext</code>方法，同时传递一个<code class="language-text">JspContext</code>对象。<code class="language-text">JspContext</code>最重要的方法是<code class="language-text">getOut</code>，它返回一个<code class="language-text">JspWriter</code>，用于将响应发送到客户端。<code class="language-text">setJspContext</code>方法的签名如下：</h4>\n<div class="gatsby-highlight">\n      <pre class="language-java"><code class="language-java"><span class="token keyword">public</span> <span class="token keyword">void</span> setJspContext <span class="token punctuation">(</span>JspContext jspContext<span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>大多数时候,需要将传进来的<code class="language-text">JspContext</code>对象赋给一个类级变量，便于后续使用。</p>\n<h4 id="如果表示标签处理器的定制标签是嵌套在另一个标签中的，jsp-容器就会调用code-classlanguage-textsetparentcode方法。该方法的签名如下："><a href="#%E5%A6%82%E6%9E%9C%E8%A1%A8%E7%A4%BA%E6%A0%87%E7%AD%BE%E5%A4%84%E7%90%86%E5%99%A8%E7%9A%84%E5%AE%9A%E5%88%B6%E6%A0%87%E7%AD%BE%E6%98%AF%E5%B5%8C%E5%A5%97%E5%9C%A8%E5%8F%A6%E4%B8%80%E4%B8%AA%E6%A0%87%E7%AD%BE%E4%B8%AD%E7%9A%84%EF%BC%8Cjsp-%E5%AE%B9%E5%99%A8%E5%B0%B1%E4%BC%9A%E8%B0%83%E7%94%A8code-classlanguage-textsetparentcode%E6%96%B9%E6%B3%95%E3%80%82%E8%AF%A5%E6%96%B9%E6%B3%95%E7%9A%84%E7%AD%BE%E5%90%8D%E5%A6%82%E4%B8%8B%EF%BC%9A" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>如果表示标签处理器的定制标签是嵌套在另一个标签中的，JSP 容器就会调用<code class="language-text">setParent</code>方法。该方法的签名如下：</h4>\n<div class="gatsby-highlight">\n      <pre class="language-java"><code class="language-java"><span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setParent</span><span class="token punctuation">(</span>JspTag parent<span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<h4 id="jsp-容器为该标签定义的每个属性都调用设置方法（setters）"><a href="#jsp-%E5%AE%B9%E5%99%A8%E4%B8%BA%E8%AF%A5%E6%A0%87%E7%AD%BE%E5%AE%9A%E4%B9%89%E7%9A%84%E6%AF%8F%E4%B8%AA%E5%B1%9E%E6%80%A7%E9%83%BD%E8%B0%83%E7%94%A8%E8%AE%BE%E7%BD%AE%E6%96%B9%E6%B3%95%EF%BC%88setters%EF%BC%89" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>JSP 容器为该标签定义的每个属性都调用设置方法（Setters）</h4>\n<h4 id="如果标签中有主体内容，jsp-将调用code-classlanguage-textsimpletagcode接口中的code-classlanguage-textsetjspbodycode方法，将主体内容作为code-classlanguage-textjspfragmentcode传递。如果没有主体内容，jsp-容器将不会调用这个方法。"><a href="#%E5%A6%82%E6%9E%9C%E6%A0%87%E7%AD%BE%E4%B8%AD%E6%9C%89%E4%B8%BB%E4%BD%93%E5%86%85%E5%AE%B9%EF%BC%8Cjsp-%E5%B0%86%E8%B0%83%E7%94%A8code-classlanguage-textsimpletagcode%E6%8E%A5%E5%8F%A3%E4%B8%AD%E7%9A%84code-classlanguage-textsetjspbodycode%E6%96%B9%E6%B3%95%EF%BC%8C%E5%B0%86%E4%B8%BB%E4%BD%93%E5%86%85%E5%AE%B9%E4%BD%9C%E4%B8%BAcode-classlanguage-textjspfragmentcode%E4%BC%A0%E9%80%92%E3%80%82%E5%A6%82%E6%9E%9C%E6%B2%A1%E6%9C%89%E4%B8%BB%E4%BD%93%E5%86%85%E5%AE%B9%EF%BC%8Cjsp-%E5%AE%B9%E5%99%A8%E5%B0%86%E4%B8%8D%E4%BC%9A%E8%B0%83%E7%94%A8%E8%BF%99%E4%B8%AA%E6%96%B9%E6%B3%95%E3%80%82" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>如果标签中有主体内容，JSP 将调用<code class="language-text">SimpleTag</code>接口中的<code class="language-text">setJspBody</code>方法，将主体内容作为<code class="language-text">JspFragment</code>传递。如果没有主体内容，JSP 容器将不会调用这个方法。</h4>\n<h4 id="jsp-容器调用code-classlanguage-textdotagcode方法。所有变量在code-classlanguage-textdotagcode方法返回时同步。"><a href="#jsp-%E5%AE%B9%E5%99%A8%E8%B0%83%E7%94%A8code-classlanguage-textdotagcode%E6%96%B9%E6%B3%95%E3%80%82%E6%89%80%E6%9C%89%E5%8F%98%E9%87%8F%E5%9C%A8code-classlanguage-textdotagcode%E6%96%B9%E6%B3%95%E8%BF%94%E5%9B%9E%E6%97%B6%E5%90%8C%E6%AD%A5%E3%80%82" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>JSP 容器调用<code class="language-text">doTag</code>方法。所有变量在<code class="language-text">doTag</code>方法返回时同步。</h4>\n<hr>\n<p><strong>注：</strong><code class="language-text">javax.servlet.jsp.tagext</code>包中也含有<code class="language-text">SimpleTag</code>接口的一个支持类：<code class="language-text">SimpleTagSupport</code>。<code class="language-text">SimpleTagSupport</code>为<code class="language-text">SimpleTag</code>接口中的所有方法都提供了默认实现（类似于适配器），我们可以继承它来编写一个简单的标签处理器。当 JSP 容器调用<code class="language-text">SimpleTag</code>接口的<code class="language-text">setJspContext</code>方法时，<code class="language-text">SimpleTagSupport</code>类中的<code class="language-text">getJspContext</code>方法将返回 JSP 容器传递的<code class="language-text">JspContext</code>实例。</p>\n<hr>\n<h3 id="编写处理器"><a href="#%E7%BC%96%E5%86%99%E5%A4%84%E7%90%86%E5%99%A8" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>编写处理器</h3>\n<p><strong>为了编译标签处理器，需要在构建路径中包含<code class="language-text">Servlet API</code> 和<code class="language-text">JSP API</code>类包。例如<code class="language-text">Tomcat</code>的<code class="language-text">servlet-api.jar</code>文件和<code class="language-text">jsp-api.jar</code>文件。</strong></p>\n<div class="gatsby-highlight">\n      <pre class="language-java"><code class="language-java"><span class="token keyword">import</span> java<span class="token punctuation">.</span>io<span class="token punctuation">.</span>IOException<span class="token punctuation">;</span>\n\n<span class="token keyword">import</span> javax<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span>jsp<span class="token punctuation">.</span>JspContext<span class="token punctuation">;</span>\n<span class="token keyword">import</span> javax<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span>jsp<span class="token punctuation">.</span>JspException<span class="token punctuation">;</span>\n<span class="token keyword">import</span> javax<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span>jsp<span class="token punctuation">.</span>tagext<span class="token punctuation">.</span>JspFragment<span class="token punctuation">;</span>\n<span class="token keyword">import</span> javax<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span>jsp<span class="token punctuation">.</span>tagext<span class="token punctuation">.</span>JspTag<span class="token punctuation">;</span>\n<span class="token keyword">import</span> javax<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span>jsp<span class="token punctuation">.</span>tagext<span class="token punctuation">.</span>SimpleTag<span class="token punctuation">;</span>\n\n<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyFirstTag</span> <span class="token keyword">implements</span> <span class="token class-name">SimpleTag</span> <span class="token punctuation">{</span>\n\n\tJspContext jspContext<span class="token punctuation">;</span>\n\n\t<span class="token annotation punctuation">@Override</span>\n\t<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">doTag</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> JspException<span class="token punctuation">,</span> IOException <span class="token punctuation">{</span>\n\t\tSystem<span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"doTag"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t\tjspContext<span class="token punctuation">.</span><span class="token function">getOut</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token string">"This is my first tag."</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t<span class="token punctuation">}</span>\n\n\t<span class="token annotation punctuation">@Override</span>\n\t<span class="token keyword">public</span> JspTag <span class="token function">getParent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\tSystem<span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"getParent"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t\t<span class="token keyword">return</span> null<span class="token punctuation">;</span>\n\t<span class="token punctuation">}</span>\n\n\t<span class="token annotation punctuation">@Override</span>\n\t<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setJspBody</span><span class="token punctuation">(</span>JspFragment body<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\tSystem<span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"setJspBody"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t<span class="token punctuation">}</span>\n\n\t<span class="token annotation punctuation">@Override</span>\n\t<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setJspContext</span><span class="token punctuation">(</span>JspContext jspContext<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\tSystem<span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"getJspContext"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t\t<span class="token keyword">this</span><span class="token punctuation">.</span>jspContext <span class="token operator">=</span> jspContext<span class="token punctuation">;</span>\n\t<span class="token punctuation">}</span>\n\n\t<span class="token annotation punctuation">@Override</span>\n\t<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setParent</span><span class="token punctuation">(</span>JspTag parent<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\tSystem<span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">"setParent"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t<span class="token punctuation">}</span>\n\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p><code class="language-text">MyFIrstTag</code>类有一个类型为<code class="language-text">JspContext</code>的<code class="language-text">jspContext</code>变量。<code class="language-text">setJspContext</code>方法将它从 JSP 容器接收到的<code class="language-text">JspContext</code>赋给这个变量。<code class="language-text">doTag</code>方法利用<code class="language-text">JspContext</code>获得一个<code class="language-text">JspWriter</code>。然后调用<code class="language-text">JspWriter</code>的<code class="language-text">print</code>方法，输出<em>This is my first tag.</em></p>\n<h3 id="注册标签"><a href="#%E6%B3%A8%E5%86%8C%E6%A0%87%E7%AD%BE" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>注册标签</h3>\n<p>用一个以<code class="language-text">.tld</code>为扩展名的 XML 文件描述标签处理器。以下示例<code class="language-text">mytags.tld</code>：</p>\n<div class="gatsby-highlight">\n      <pre class="language-xml"><code class="language-xml"><span class="token prolog">&lt;?xml version="1.0" encoding="UTF-8"?></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>taglib</span> <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>http://java.sun.com/xml/ns/j2ee<span class="token punctuation">"</span></span>\n    <span class="token attr-name"><span class="token namespace">xmlns:</span>xsi</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>http://www.w3.org/2001/XMLSchema-instance<span class="token punctuation">"</span></span>\n    <span class="token attr-name"><span class="token namespace">xsi:</span>schemaLocation</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>http://java.sun.com/xml/ns/j2ee web-jsptaglibrary_2_1.xsd<span class="token punctuation">"</span></span>\n    <span class="token attr-name">version</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>2.1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>description</span><span class="token punctuation">></span></span>\n         Simple tag examples\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>description</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tlib-version</span><span class="token punctuation">></span></span>1.0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tlib-version</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>short-name</span><span class="token punctuation">></span></span>My First Taglib Example<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>short-name</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tag</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">></span></span>firstTag<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tag-class</span><span class="token punctuation">></span></span>customtag.MyFirstTag<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tag-class</span><span class="token punctuation">></span></span>\n\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body-content</span><span class="token punctuation">></span></span>empty<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body-content</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tag</span><span class="token punctuation">></span></span>\n\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tag</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">></span></span>dataFormatter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tag-class</span><span class="token punctuation">></span></span>customtag.DataFormatterTag<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tag-class</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body-content</span><span class="token punctuation">></span></span>empty<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body-content</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>attribute</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">></span></span>header<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>required</span><span class="token punctuation">></span></span>true<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>required</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>attribute</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>attribute</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">></span></span>items<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>required</span><span class="token punctuation">></span></span>true<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>required</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>attribute</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tag</span><span class="token punctuation">></span></span>\n\n\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tag</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>name</span><span class="token punctuation">></span></span>select<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>name</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tag-class</span><span class="token punctuation">></span></span>customtag.SelectElementTag<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tag-class</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body-content</span><span class="token punctuation">></span></span>scriptless<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body-content</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tag</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>taglib</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<p>标签类库描述符中的主要元素是<code class="language-text">tag</code>，它用来描述标签，其中包含一个<code class="language-text">name</code>元素和一个<code class="language-text">tag--class</code>元素。<code class="language-text">name</code>用于给该标签命名。<code class="language-text">tag-class</code>用于指定标签处理器的全类名。一个<code class="language-text">.tld</code>文件中可以包含多个<code class="language-text">tag</code>元素。\n<code class="language-text">description</code>用于描述<code class="language-text">tag</code>元素。<code class="language-text">short-name</code>为标签的简称。<code class="language-text">tlib-version</code>元素设置定制标签的版本。</p>\n<h3 id="使用标签"><a href="#%E4%BD%BF%E7%94%A8%E6%A0%87%E7%AD%BE" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>使用标签</h3>\n<div class="gatsby-highlight">\n      <pre class="language-html"><code class="language-html">&lt;%@ taglib uri="WEB-INF/mytags.tld" prefix="easy">\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>\n\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>测试我的第一个标签<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>\nHello!<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">/></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token namespace">easy:</span>firstTag</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token namespace">easy:</span>firstTag</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<p>在控制台上将显示：</p>\n<p><em>setJspContext</em></p>\n<p><em>doTag</em></p>',frontmatter:{title:"编写定制标签",date:"March 24, 2016"}}},pathContext:{slug:"/customize-tag-of-jsp/",previous:{fields:{slug:"/exists-compareTo-not-exists/"},frontmatter:{title:"exists 与 not exists 的概念与用法"}},next:{fields:{slug:"/web-full-stack-review/"},frontmatter:{title:"WEB 全栈的学习"}}}}}});
//# sourceMappingURL=path---customize-tag-of-jsp-3beac9bb7373fd93b4e3.js.map