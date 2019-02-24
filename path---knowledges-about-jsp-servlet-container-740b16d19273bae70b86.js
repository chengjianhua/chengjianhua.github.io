webpackJsonp([0x9395134d6128],{551:function(e,t){e.exports={data:{site:{siteMetadata:{title:"Blog - Jianhua Cheng",author:"Jianhua Cheng"}},markdownRemark:{id:"/Users/chengjianhua/Documents/codes/chengjianhua.github.io/src/pages/knowledges-about-jsp-servlet-container/index.md absPath of file >>> MarkdownRemark",html:'<p><code class="language-text">Servlet</code>就是一个 Java 程序，一个<code class="language-text">Servlet</code>应用程序经常包含一个或者多个<code class="language-text">Servlet</code>也就是当用户发送请求，例如提交表单，那么需要一个或多个<code class="language-text">Servlet</code>协同作用，而访问的<code class="language-text">jsp</code>页面也是一个<code class="language-text">Servlet</code>。当每次我们发送请求时，<code class="language-text">Servlet</code>应用程序中的<code class="language-text">service()</code>方法就会被触发执行一次。当初次访问一个<code class="language-text">Servlet</code>时，<code class="language-text">init()</code>方法会触发执行一次，之后的请求都是执行<code class="language-text">service()</code>方法。</p>\n<!-- more -->\n<p>如果你觉得奇怪，为什么没看到过<code class="language-text">service()</code>这个方法，那是因为我们一般用的是通过继承<code class="language-text">HttpServlet</code>来实现<code class="language-text">Servlet</code>，而在<code class="language-text">HttpServlet</code>中一般的请求我们只要<code class="language-text">@override</code> <code class="language-text">doGet()</code>和<code class="language-text">doPost()</code>方法即可实现我们对请求的处理。而<code class="language-text">HttpServlet</code>中的<code class="language-text">service()</code>方法会根据请求的类型调用对应的<code class="language-text">doGet()</code>、<code class="language-text">doPost()</code>等等方法，所以只要实现<code class="language-text">doGet()</code>和<code class="language-text">doPost()</code>方法等等即可。</p>\n<p>为什么说<code class="language-text">jsp</code>也是一个<code class="language-text">Servlet</code>呢，那是因为当我们使用<code class="language-text">Servlet/JSP</code>容器时，例如最常用的<code class="language-text">Tomcat</code>会将<code class="language-text">jsp</code>文件转化成相应的一个<code class="language-text">Servlet</code>程序，<code class="language-text">jsp</code>页面的主体就转化成相应代码位于<code class="language-text">service()</code>方法当中。<code class="language-text">jsp</code>技术只是将开发变得简单，然而基本原理还是不变的，实现及其复杂的<code class="language-text">Servlet</code>就由<code class="language-text">Tomcat</code>这一类的容器来实现，我们只要实现<code class="language-text">jsp</code>页面就可以了。</p>\n<p>访问<code class="language-text">Servlet</code>只需为地址添加映射到<code class="language-text">Servlet</code>类即可或者是<code class="language-text">@WebServlet</code>注解实现。</p>\n<p><code class="language-text">Servlet</code>是一个接口，含有五个方法：</p>\n<ul>\n<li><code class="language-text">init</code>。仅在第一次访问 Servlet 时调用，之后不再调用。</li>\n<li><code class="language-text">service</code>。每次请求 Servlet 时，Servlet 容器都会调用这个方法。第一次调用 init，之后调用 service。这里编写 Servlet 要实现的处理代码。</li>\n<li><code class="language-text">destroy</code>。销毁 Servlet 时，Servlet 容器就会调用这个方法。</li>\n<li><code class="language-text">getServletInfo</code>……</li>\n<li><code class="language-text">getServletConfig</code>……</li>\n</ul>\n<p><img src="http://img.blog.csdn.net/20150905225924654" alt="类与接口"></p>',frontmatter:{title:"初学者对 Servlet、JSP 及 Web 容器之间关系的理解",date:"March 23, 2016"}}},pathContext:{slug:"/knowledges-about-jsp-servlet-container/",previous:{fields:{slug:"/function-attributes-methods-constructor/"},frontmatter:{title:"函数的属性、方法以及构造函数"}},next:{fields:{slug:"/frequently-used-jstl-tags/"},frontmatter:{title:"常用的 JSTL 标签"}}}}}});
//# sourceMappingURL=path---knowledges-about-jsp-servlet-container-740b16d19273bae70b86.js.map