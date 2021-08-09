webpackJsonp([0xe0188e52e622],{538:function(n,s){n.exports={data:{site:{siteMetadata:{title:"Blog - Jianhua Cheng",author:"Jianhua Cheng"}},markdownRemark:{id:"/Users/admin/Documents/codes/github/chengjianhua/chengjianhua.github.io/src/pages/authenticate-by-passport/index.md absPath of file >>> MarkdownRemark",html:'<p><strong>先啰嗦一段背景</strong></p>\n<p>介绍一下项目所使用的技术栈。<code class="language-text">Node.js</code>，使用 <code class="language-text">Express</code> 来完成后端服务器的架构，这个时候就遇到了一个问题了。在我以前，是用 <code class="language-text">Java</code> 来开发 Web 后端服务器，那时我采用 <code class="language-text">Spring</code> 框架来完成，登录的验证就是比对数据库中的用户名密码与当前用户所输入的用户名密码，而且如果希望拦截未登录的用户的访问某些特定的网址时，我可以添加 <code class="language-text">Spring</code> 自定义的拦截器实现来实现用户未成功验证时的拦截。但是现在我使用的是 <code class="language-text">Node.js</code> 来完成开发，不知道该怎么做了，没办法只好 google 一下了，结果推荐较多的就是 <code class="language-text">passport.js</code> 。</p>\n<p>这个时候已经确定就使用这个 js 库了，好的，开工！但是问题来了，我该怎么使用呢，官方是有文档，英文倒也还好，但总感觉就是有那么点不够清晰，有些细节不一定能好好的解决，为了方便更多人使用这个框架，经过配置成功以后，想把这个的经验分享出来，<strong>好了，进入正题~</strong></p>\n<!-- more -->\n<h2 id="配置环境"><a href="#%E9%85%8D%E7%BD%AE%E7%8E%AF%E5%A2%83" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>配置环境</h2>\n<h3 id="使用的依赖包"><a href="#%E4%BD%BF%E7%94%A8%E7%9A%84%E4%BE%9D%E8%B5%96%E5%8C%85" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>使用的依赖包</h3>\n<p>默认使用的环境就是 <code class="language-text">express</code> 搭建的服务器。</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash"><span class="token comment"># passport 需要 session 的支持，</span>\n<span class="token comment">#由于使用的是 express.js，所以这里使用 express-session</span>\n<span class="token function">npm</span> <span class="token function">install</span> express-session --save\n\n<span class="token comment"># 当然要下载 passport ……</span>\n<span class="token function">npm</span> <span class="token function">install</span> passport --save\n\n<span class="token comment"># passport支持一系列的 OAuth 第三方验证，</span>\n<span class="token comment">#而我们一般的使用场景为验证自己项目中的用户</span>\n<span class="token comment">#，所以这里使用 passport-local</span>\n<span class="token function">npm</span> <span class="token function">install</span> passport-local --save\n</code></pre>\n      </div>\n<h3 id="配置服务器"><a href="#%E9%85%8D%E7%BD%AE%E6%9C%8D%E5%8A%A1%E5%99%A8" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>配置服务器</h3>\n<p>先搭建好服务器用于 <code class="language-text">passport</code> 的配置，加上 <code class="language-text">session</code> 的配置，其中 <code class="language-text">passport-config.js</code> 文件先导入不管具体实现，不影响我的描述，稍后将在下方给出详细配置方法。</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token comment">/**\n * /server.js\n */</span>\n\n<span class="token keyword">import</span> express <span class="token keyword">from</span> <span class="token string">\'express\'</span>\n<span class="token keyword">import</span> expressSession <span class="token keyword">from</span> <span class="token string">\'express-session\'</span>\n<span class="token comment">// 导入一个我们配置好了 passport 的 js 文件</span>\n<span class="token keyword">import</span> passport <span class="token keyword">from</span> <span class="token string">\'../core/passport-config\'</span>\n\n<span class="token keyword">const</span> server <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n\n<span class="token comment">// ... 不相干的 express 的配置</span>\n\n<span class="token comment">// 配置 session，passport 所需的基础，必须有</span>\nserver<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>\n  <span class="token function">expressSession</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    <span class="token comment">// 你喜欢的任意名字作为一个加密用的字符串</span>\n    secret<span class="token punctuation">:</span> <span class="token string">\'whatever the name you like\'</span><span class="token punctuation">,</span>\n    resave<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n    saveUninitialized<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">)</span>\n<span class="token comment">// 初始化调用 passport</span>\nserver<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>passport<span class="token punctuation">.</span><span class="token function">initialize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\nserver<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>passport<span class="token punctuation">.</span><span class="token function">session</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n<span class="token comment">//</span>\n</code></pre>\n      </div>\n<p>到这里为止，我们在服务器上的设置就完成了，接下来看看如何配置 <code class="language-text">passport</code>。</p>\n<h3 id="配置-passportjs"><a href="#%E9%85%8D%E7%BD%AE-passportjs" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>配置 passport.js</h3>\n<p><strong>我把代码的作用写在了以下代码的注释中</strong>，里面详细讲述了大致的原理及作用。</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token comment">/**\n * /core/passport-config.js\n */</span>\n\n<span class="token keyword">import</span> passport <span class="token keyword">from</span> <span class="token string">\'passport\'</span>\n<span class="token keyword">import</span> LocalStrategy <span class="token keyword">from</span> <span class="token string">\'passport-local\'</span>\n\n<span class="token comment">// 这里引入的是一个操作数据库的 User 工具函数</span>\n<span class="token keyword">import</span> User <span class="token keyword">from</span> <span class="token string">\'../model/User\'</span>\n\n<span class="token comment">// 这个配置就是参照官方示例来的，不过官方的讲解不够详细</span>\n<span class="token comment">// 我将在这里详细讲讲是怎样获取用户并验证是否正确</span>\npassport<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>\n  <span class="token keyword">new</span> <span class="token class-name">LocalStrategy</span><span class="token punctuation">(</span>\n    <span class="token comment">/**\n     * @param username 用户输入的用户名\n     * @param password 用户输入的密码\n     * @param done 验证验证完成后的回调函数，由passport调用\n     */</span>\n    <span class="token keyword">function</span><span class="token punctuation">(</span>username<span class="token punctuation">,</span> password<span class="token punctuation">,</span> done<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token comment">// 在编写 User.findUniqueUserByUsername 时，包含两个参数，一个是 username</span>\n      <span class="token comment">// 一个是我们现在所传入的回调函数，我们将获取到的用户信息传递给我们的回调函数</span>\n      User<span class="token punctuation">.</span><span class="token function">findUniqueUserByUsername</span><span class="token punctuation">(</span>username<span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span>err<span class="token punctuation">,</span> user<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n          console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'出现错误.\'</span><span class="token punctuation">)</span>\n          <span class="token keyword">return</span> <span class="token function">done</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>\n        <span class="token punctuation">}</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>user<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n          console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'没有找到对应的用户名.\'</span><span class="token punctuation">)</span>\n\n          <span class="token keyword">return</span> <span class="token function">done</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> message<span class="token punctuation">:</span> <span class="token string">\'没有找到对应的用户名.\'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>\n        <span class="token punctuation">}</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>user<span class="token punctuation">.</span>password <span class="token operator">!=</span> password<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n          console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'密码匹配有误.\'</span><span class="token punctuation">)</span>\n\n          <span class="token keyword">return</span> <span class="token function">done</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> message<span class="token punctuation">:</span> <span class="token string">\'密码匹配有误.\'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>\n        <span class="token punctuation">}</span>\n\n        <span class="token keyword">return</span> <span class="token function">done</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> user<span class="token punctuation">)</span>\n      <span class="token punctuation">}</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">)</span>\n<span class="token punctuation">)</span>\n\n<span class="token comment">// serializeUser 在用户登录验证成功以后将会把用户的数据存储到 session 中（在这里</span>\n<span class="token comment">// 存到 session 中的是用户的 username）。在这里的 user 应为我们之前在 new</span>\n<span class="token comment">// LocalStrategy (fution() { ... }) 中传递到回调函数 done 的参数 user 对象（从数据// 库中获取到的）</span>\npassport<span class="token punctuation">.</span><span class="token function">serializeUser</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span>user<span class="token punctuation">,</span> done<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token function">done</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> user<span class="token punctuation">.</span>username<span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n<span class="token comment">// deserializeUser 在每次请求的时候将会根据用户名读取 从 session 中读取用户的全部数据</span>\n<span class="token comment">// 的对象，并将其封装到 req.user</span>\npassport<span class="token punctuation">.</span><span class="token function">deserializeUser</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span>username<span class="token punctuation">,</span> done<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  User<span class="token punctuation">.</span><span class="token function">findUniqueUserByUsername</span><span class="token punctuation">(</span>username<span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span>err<span class="token punctuation">,</span> user<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> <span class="token function">done</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n    <span class="token function">done</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> user<span class="token punctuation">)</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n<span class="token comment">// 这是封装了一个中间件函数到 passport 中，可以在需要拦截未验证的用户的请求的时候调用</span>\npassport<span class="token punctuation">.</span><span class="token function-variable function">authenticateMiddleware</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">authenticationMiddleware</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span>req<span class="token punctuation">,</span> res<span class="token punctuation">,</span> next<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>req<span class="token punctuation">.</span><span class="token function">isAuthenticated</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n    res<span class="token punctuation">.</span><span class="token function">redirect</span><span class="token punctuation">(</span><span class="token string">\'/login\'</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> passport\n</code></pre>\n      </div>\n<p>到此基本的配置到此结束，以我的经验，这足以来完成基本的验证使用了。</p>\n<h2 id="使用"><a href="#%E4%BD%BF%E7%94%A8" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>使用</h2>\n<p>接下来讲讲如何在 <em>server.js</em> 中使用我们上面配置好的 <em>passport.js</em>， 我们在 <strong>配置服务器</strong> 中已经加载并使用了我们的配置，现在让我们看看如何在我们的路由中使用它。</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token comment">// ------------</span>\n<span class="token comment">// server.js</span>\n<span class="token comment">// ------------</span>\n\n<span class="token keyword">import</span> passport <span class="token keyword">from</span> <span class="token string">\'../core/passport-config\'</span>\n\n<span class="token comment">// 如下所示，我们在路由的请求地址 “/login” 和 后续的请求处理函数之间调用</span>\n<span class="token comment">// passport.authenticate(\'local\')，即可完成对用户输入的用户名密码的验证</span>\nserver<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">\'/login\'</span><span class="token punctuation">,</span> passport<span class="token punctuation">.</span><span class="token function">authenticate</span><span class="token punctuation">(</span><span class="token string">\'local\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span>req<span class="token punctuation">,</span> res<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">// req.user 中会包含在 deserializeUser 函数中传入的 user 数据</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'-------req.user-----------\'</span><span class="token punctuation">)</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>user<span class="token punctuation">)</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'-------req.user-----------\'</span><span class="token punctuation">)</span>\n\n  <span class="token keyword">let</span> returnData <span class="token operator">=</span> <span class="token punctuation">{</span>\n    isSuccess<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    uer<span class="token punctuation">:</span> req<span class="token punctuation">.</span>user<span class="token punctuation">,</span>\n  <span class="token punctuation">}</span>\n\n  res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>JSON<span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>returnData<span class="token punctuation">)</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n<span class="token comment">// 调用我们之前在 passport-config 中封装的用于验证用户是否已经被验证的中间件函数</span>\n<span class="token comment">// 即可限制未被验证的用户不能请求该路由，返回 Error: 401(Unauthorized)</span>\nserver<span class="token punctuation">.</span><span class="token keyword">get</span><span class="token punctuation">(</span><span class="token string">\'/testAuth\'</span><span class="token punctuation">,</span> passport<span class="token punctuation">.</span><span class="token function">authenticateMiddleware</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span>req<span class="token punctuation">,</span> res<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">// ......</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<h2 id="总结"><a href="#%E6%80%BB%E7%BB%93" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>总结</h2>\n<p>经过实例代码我们知道了如何配置以及使用 passport。解释内容请读者留心代码注释。</p>',frontmatter:{title:"使用 passport.js 来完成登录验证",date:"June 22, 2016"}}},pathContext:{slug:"/authenticate-by-passport/",previous:{fields:{slug:"/border-usage/"},frontmatter:{title:"border 的使用指南及有趣的应用"}},next:{fields:{slug:"/first-internship-experience/"},frontmatter:{title:"第一次的实习经验"}}}}}});
//# sourceMappingURL=path---authenticate-by-passport-fa2b6c7744d7951b93bb.js.map