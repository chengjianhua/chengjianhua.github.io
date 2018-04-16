webpackJsonp([0xe5478e9ae204],{550:function(n,a){n.exports={data:{site:{siteMetadata:{title:"Blog - Jianhua Cheng",author:"Jianhua Cheng"}},markdownRemark:{id:"/Users/chengjianhua/Documents/codes/chengjianhua.github.io/src/pages/penv.macro-use/index.md absPath of file >>> MarkdownRemark",html:'<h2 id="介绍"><a href="#%E4%BB%8B%E7%BB%8D" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>介绍</h2>\n<p>首先, <a href="https://github.com/chengjianhua/penv.macro"><code class="language-text">penv.macro</code></a> 是基于 <a href="https://github.com/kentcdodds/babel-plugin-macros"><code class="language-text">babel-plugin-macros</code></a> 创建的一个 babel 插件.</p>\n<p>它能用来<strong>在一个代码文件中统一管理</strong>你的环境变量, 这些环境变量会在不同的环境下被赋予不同的值. 并且能够做到<strong>只选取和当前环境匹配的值, 然后将其他的值在 babel 转换代码的过程中中移除</strong>. 从而维持了编写时的直观性以及确保不会将与指定环境不相干的代码发布到对应的环境上.</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/twitter-kentcdodds-29a0fb1201fed00928e2e758f58d32f2-fa2eb.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 590px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 103.22033898305085%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAVCAYAAABG1c6oAAAACXBIWXMAAAsSAAALEgHS3X78AAAEmUlEQVQ4y21VaU9cZRTmB5jaT34wJlY/W1u2YRaW2feFYaBAoYkfWottoRQQCakxqJGaaNqaIsZSl1QNkNpFKKYt1KYuEaotSylLnQFsITArDDPD3Nkez3vvFPjgTZ57znmX557nvG/Ozejr7cHc/AJhHvNk/3G64PH54fb64Quswh8IYC0YRJTjwHExAodolOPjWEyImY3HEwhvcMiothRjZvYx3CvLWFpcxOLiU7jdK1ih2EfES8tueLxe3g/4/fD7vPDQPIPb44GH4PP5kEwmEaEPZYRCYUSTwBoHhONAMAYEokIcT9CX11y00cdv8oViWKXxIMEfSSCVwuaTTKYEQhYkaIIj0jghSkE4RpNEHoklSFKYJHFIxGOIJZL8GrZ+G9fms0noWg7htykvRucCmHeHCGE4aWx5NQoPpbMe2oAnEOZrF6E6BUNRPHGvY/rJKkadPky4/Jj+N4DQRprw4x8eQNtwBe90DOKjrtvo7htG/9B93Lp7H32D99AzMIx3O2+jpWMIX18dRsNngzhBaDo3hNcO9uLlql4UnBiAPxgRCM9cGoexoRtVB2rgqNoHXXUVVLZKKIsroLSTte+HzFyBbN0+FForsVddijxDOXSl1RAby/BK8Snk1f2MQDAsEHZcm4Tp+FdQme0Qq1TIUmqRWaRBllzD2z0FKmQWqpAtV2Nv2mYVqfnxrAI5LIc/hPnkINyBkEB4YeAR3nr/InQl5ZCorRBrrZBobcjX2SA1WAhmiHUmZCt0PLLkgs1R6nlS06E2NHX+gWV/mvDP8QV823Mdekc5pBoLxPpiiA0lRGyG3FqCPI0R2cpnJAJRllzLx3sKlHiz+RQ6L/8N31pa8rRzCd/19FHdSlFkK4ahqgIqRykUdjvUpaXkl0Bd5uChrSiDplxYJ1IbsFumQHPbJxgZe4z18IZA+PvYAs52XYLWXkbZmZBvoiy1RpJphMRggoTGmGyp0QyZSShBrkrPZ7o7n2XYjrsjk1uE39yYgb72ApRWR1qWYRuEjbkqI3Ipzlbo+TW5KmE+s1AJUcV7qGy/A+9qWvLpHyfwovUMRBobLdSRFMpOY+JrmEeWxQyM+NnB5KTJc+QqvKRrRW7dTbo26Xt49vIEdhWfRr7RQYdiJmIrRFobnwWTzEtnso3mTZ+Byc9Ta7DL0ApZw82ti/39rRlY67ugsDggImns2oi1Fj47lqVEx4iohnoL+ay+Jr6GIjp9kVIglNbf2CLsuv4Ih9suUoZ2qpOOJ2LZMZmsbswX02YpHZSEyETsQBQa3pdpdXjV1Ir87RmeuzKO2vZuvFH/AQ7UNOLgsUbUNb6NY03NON7cioaWk9hf04IXCo5gh/QodhKelxzFDvER7JTV4jn1p3j90DX419KEI1Mr+PWBEw9nFjAyOoXRh1OYnZ3F2F9jcFIHd7rmcOfeDK/k86tj+OKnCZwn/3z/Q8IkvuyfQvcvLgTDUYEQqSQS1HHZw8WTW03zqZteqXTvE8YTXAT/3w2BDaEfphCklu0NJ6gjx+Ejy9H/gbV0RsE+xPtEzFHDJUOdPIkYrdmCELN/yn/ncKVHRfH5RAAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="Tweet from Kent C. Dodds"\n        title=""\n        src="/static/twitter-kentcdodds-29a0fb1201fed00928e2e758f58d32f2-fb8a0.png"\n        srcset="/static/twitter-kentcdodds-29a0fb1201fed00928e2e758f58d32f2-1a291.png 148w,\n/static/twitter-kentcdodds-29a0fb1201fed00928e2e758f58d32f2-2bc4a.png 295w,\n/static/twitter-kentcdodds-29a0fb1201fed00928e2e758f58d32f2-fb8a0.png 590w,\n/static/twitter-kentcdodds-29a0fb1201fed00928e2e758f58d32f2-526de.png 885w,\n/static/twitter-kentcdodds-29a0fb1201fed00928e2e758f58d32f2-fa2eb.png 1180w"\n        sizes="(max-width: 590px) 100vw, 590px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<h2 id="\b-用法"><a href="#%08-%E7%94%A8%E6%B3%95" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>\b 用法</h2>\n<p>具体用法可以参见 <a href="https://github.com/chengjianhua/penv.macro/blob/master/README.zh-CN.md">penv.macro README.zh-CN.md</a>.</p>\n<h2 id="动机"><a href="#%E5%8A%A8%E6%9C%BA" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>动机</h2>\n<p>我们经常会有<strong>一些变量是需要在不同的环境下被赋予不同的值</strong>, 例如接口地址. 开发环境下可能是使用本机的模拟接口 <code class="language-text">http://localhost:3000/api/</code>, 预发环境下是 <code class="language-text">https://staging.cool-app.com/api</code>, \b\b 线上环境下是 <code class="language-text">https://cool-app.com/api</code>. <strong>同时我们希望在处于某个环境时, 不属于该环境的配置不应该出现在该环境的代码中</strong>. 例如当发布生产环境代码的时候不希望测试环境相关的配置被打包到生产环境使用的代码中, 这样会暴露内部使用的域名以及发布了完全不需要的代码.</p>\n<p>我列举一下在使用 <code class="language-text">penv.macro</code> 之前我所了解的几种便于实现的方法或思路:</p>\n<ol>\n<li>\n<p>使用 <code class="language-text">webpack</code> 的 \b<code class="language-text">DefinePlugin</code> 或者 <code class="language-text">EnvironmentPlugin</code>, 然后在使用的时候读取 <code class="language-text">process.env.BASE_URL</code> 的值</p>\n</li>\n<li>\n<p>编写多个配置文件, 通过设置针对不同环境的别名或者是再增加一个入口文件用于判断环境导出对应的配置, 使用时直接导入该模块即可</p>\n</li>\n<li>\n<p>编写单个文件, 在为变量赋值时手写判断逻辑, 使用时导入该模块即可</p>\n</li>\n</ol>\n<p>以上几种方式或多或少都有其繁琐或者不够合理的地方, <code class="language-text">penv.macro</code> 的诞生正是为了解决配置繁琐以及维护性的问题. 接下来会有详细介绍.</p>\n<h2 id="对比"><a href="#%E5%AF%B9%E6%AF%94" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>对比</h2>\n<p>在此详细列举出上一段中提到的几种思路的实现, 在末尾总结对比各个方案的, 以便读者更加了解为何 <code class="language-text">penv.macro</code> 是个更优的方案.</p>\n<h3 id="webpack"><a href="#webpack" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>webpack</h3>\n<p><code class="language-text">webpack.config.js</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token comment">// used to pick the value for the specified environment</span>\n<span class="token keyword">const</span> <span class="token function-variable function">pickEnv</span> <span class="token operator">=</span> environmentValues <span class="token operator">=></span> environmentValues<span class="token punctuation">[</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span>NODE_ENV<span class="token punctuation">]</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  plugins<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n    <span class="token keyword">new</span> <span class="token class-name">EnvironmentPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      NODE_ENV<span class="token punctuation">:</span> <span class="token string">\'production\'</span><span class="token punctuation">,</span>\n      API_BASE<span class="token punctuation">:</span> <span class="token function">pickEnv</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n        development<span class="token punctuation">:</span> <span class="token string">\'http://localhost:3000/api\'</span><span class="token punctuation">,</span>\n        staging<span class="token punctuation">:</span> <span class="token string">\'https://staging.cool-app.com/api\'</span><span class="token punctuation">,</span>\n        production<span class="token punctuation">:</span> <span class="token string">\'https://cool-app.com/api\'</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n      \bWECHAT_AUTH<span class="token punctuation">:</span> <span class="token function">pickEnv</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n        development<span class="token punctuation">:</span> <span class="token string">\'http://localhost:3000/wechat-auth/api\'</span><span class="token punctuation">,</span>\n        staging<span class="token punctuation">:</span> <span class="token string">\'https://staging.wechat-auth.com/api\'</span><span class="token punctuation">,</span>\n        production<span class="token punctuation">:</span> <span class="token string">\'https://wechat-auth.com/api\'</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<hr>\n<p><code class="language-text">app.js</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">const</span> <span class="token punctuation">{</span> API_BASE<span class="token punctuation">,</span> WECHAT_AUTH <span class="token punctuation">}</span> <span class="token operator">=</span> process<span class="token punctuation">.</span>env\n</code></pre>\n      </div>\n<p>从实现的便利性上, 这是最接近 <code class="language-text">penv.macro</code> 的方式. 编写简单, 主要问题是太过于依赖 webpack, 如果代码需要测试, 会增加测试环境搭建的复杂度. 读取变量时也不够直观.</p>\n<h3 id="多个配置文件"><a href="#%E5%A4%9A%E4%B8%AA%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>多个配置文件</h3>\n<p><code class="language-text">configs/development.js</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">export</span> <span class="token keyword">const</span> API_BASE <span class="token operator">=</span> <span class="token string">\'http://localhost:3000/api\'</span>\n</code></pre>\n      </div>\n<p><code class="language-text">configs/staging.js</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">export</span> <span class="token keyword">const</span> API_BASE <span class="token operator">=</span> <span class="token string">\'https://staging.cool-app.com/api\'</span>\n</code></pre>\n      </div>\n<p><code class="language-text">configs/production.js</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">export</span> <span class="token keyword">const</span> API_BASE <span class="token operator">=</span> <span class="token string">\'https://cool-app.com/api\'</span>\n</code></pre>\n      </div>\n<p>配置别名的情况下:</p>\n<p><code class="language-text">.babelrc</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-json"><code class="language-json"><span class="token punctuation">{</span>\n  <span class="token property">"env"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">"development"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n      <span class="token property">"plugins"</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n        <span class="token punctuation">[</span>\n          <span class="token string">"module-resolver"</span><span class="token punctuation">,</span>\n          <span class="token punctuation">{</span>\n            <span class="token property">"alias"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n              <span class="token property">"@/config"</span><span class="token operator">:</span> <span class="token string">"./src/configs/development"</span>\n            <span class="token punctuation">}</span>\n          <span class="token punctuation">}</span>\n        <span class="token punctuation">]</span>\n      <span class="token punctuation">]</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token property">"staging"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n      <span class="token property">"plugins"</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n        <span class="token punctuation">[</span>\n          <span class="token string">"module-resolver"</span><span class="token punctuation">,</span>\n          <span class="token punctuation">{</span>\n            <span class="token property">"alias"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n              <span class="token property">"@/config"</span><span class="token operator">:</span> <span class="token string">"./src/configs/staging"</span>\n            <span class="token punctuation">}</span>\n          <span class="token punctuation">}</span>\n        <span class="token punctuation">]</span>\n      <span class="token punctuation">]</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token property">"production"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n      <span class="token property">"plugins"</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n        <span class="token punctuation">[</span>\n          <span class="token string">"module-resolver"</span><span class="token punctuation">,</span>\n          <span class="token punctuation">{</span>\n            <span class="token property">"alias"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n              <span class="token property">"@/config"</span><span class="token operator">:</span> <span class="token string">"./src/configs/production"</span>\n            <span class="token punctuation">}</span>\n          <span class="token punctuation">}</span>\n        <span class="token punctuation">]</span>\n      <span class="token punctuation">]</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>增加入口文件并根据环境导出文件:</p>\n<p><code class="language-text">config/index.js</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span>NODE_ENV <span class="token operator">===</span> <span class="token string">\'development\'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'./development\'</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span>NODE_ENV <span class="token operator">===</span> <span class="token string">\'staging\'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'./staging\'</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span>NODE_ENV <span class="token operator">===</span> <span class="token string">\'production\'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'./production\'</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>react 的打包文件的入口也正是这么做的: <a href="https://github.com/facebook/react/blob/master/packages/react/npm/index.js">react/index.js at master · facebook/react</a>.</p>\n<p>这种情况下在构建时, 如果在 webpack 中通过 <code class="language-text">EnvironmentPlugin</code> 设置了 <code class="language-text">process.env.NODE_ENV</code> 的值之后, 会被替换成具体的值, 然后匹配不到的 <code class="language-text">if() {}</code> 代码块会被代码压缩工具去掉. 从而达到不相干的 配置不会被打包工具打包进最终的 bundle 中.</p>\n<hr>\n<p><code class="language-text">app.js</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">import</span> <span class="token punctuation">{</span> API_BASE <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@/config\'</span>\n</code></pre>\n      </div>\n<h3 id="单个文件"><a href="#%E5%8D%95%E4%B8%AA%E6%96%87%E4%BB%B6" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>单个文件</h3>\n<p><code class="language-text">config.js</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">let</span> API_BASE\n\n<span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span>NODE_ENV <span class="token operator">===</span> <span class="token string">\'development\'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  API_BASE <span class="token operator">=</span> <span class="token string">\'http://localhost:3000/api\'</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span>NODE_ENV <span class="token operator">===</span> <span class="token string">\'staging\'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  API_BASE <span class="token operator">=</span> <span class="token string">\'https://staging.cool-app.com/api\'</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span>NODE_ENV <span class="token operator">===</span> <span class="token string">\'production\'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  API_BASE <span class="token operator">=</span> <span class="token string">\'https://cool-app.com/api\'</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">export</span> <span class="token punctuation">{</span> API_BASE <span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<hr>\n<p><code class="language-text">app.js</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">import</span> <span class="token punctuation">{</span> API_BASE <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@/config\'</span>\n</code></pre>\n      </div>\n<p>显而易见这种方式极其繁琐, 随着文件数的上升, 先不考虑其他, 其所带来的模板代码量也是巨大的. 其消除不需要的值的代码的方式和上一部分的原理相同.</p>\n<h3 id="penvmacro"><a href="#penvmacro" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>penv.macro</h3>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token comment">// all of this code</span>\n<span class="token keyword">import</span> env <span class="token keyword">from</span> <span class="token string">\'penv.macro\'</span>\n\n<span class="token keyword">const</span> baseUrl <span class="token operator">=</span> <span class="token function">env</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  development<span class="token punctuation">:</span> <span class="token string">\'http://localhost:3000/api\'</span><span class="token punctuation">,</span>\n  staging<span class="token punctuation">:</span> <span class="token string">\'https://staging.cool-app.com/api\'</span><span class="token punctuation">,</span>\n  production<span class="token punctuation">:</span> <span class="token string">\'https://cool-app.com/api\'</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n<span class="token comment">// assuming process.env.NODE_ENV === \'staging\'</span>\n<span class="token comment">// ↓ ↓ ↓ transpiles to ↓ ↓ ↓</span>\n\n<span class="token keyword">const</span> baseUrl <span class="token operator">=</span> <span class="token string">\'https://staging.cool-app.com/api\'</span>\n\n<span class="token comment">// learn more: http://npm.im/penv.macro</span>\n</code></pre>\n      </div>\n<p>这种方式的好处在于可以就近维护一个变量在不同环境下的值, 且使用方式很透明, 使用者只需要像使用一个普通的方法一样来使用它. 导入配置文件时只需要像对待一个普通的模块来对待它, 不需要使用额外的别名配置或者判断.</p>\n<h3 id="结论"><a href="#%E7%BB%93%E8%AE%BA" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>结论</h3>\n<table>\n<thead>\n<tr>\n<th>—</th>\n<th>webpack</th>\n<th>多配 \n<br />\n (别名)</th>\n<th>多配 \n<br />\n (动态导出)</th>\n<th>单配</th>\n<th><code class="language-text">penv.macro</code></th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>代码量</td>\n<td>✅</td>\n<td>🚫</td>\n<td>🚫</td>\n<td>✅</td>\n<td>✅</td>\n</tr>\n<tr>\n<td>就近管理</td>\n<td>✅</td>\n<td>🚫</td>\n<td>🚫</td>\n<td>🚫</td>\n<td>✅</td>\n</tr>\n<tr>\n<td>不依赖压缩工具</td>\n<td>🚫</td>\n<td>✅</td>\n<td>🚫</td>\n<td>🚫</td>\n<td>✅</td>\n</tr>\n<tr>\n<td>不依赖 webpack</td>\n<td>🚫</td>\n<td>✅</td>\n<td>🚫</td>\n<td>🚫</td>\n<td>✅</td>\n</tr>\n<tr>\n<td>不依赖 babel</td>\n<td>✅</td>\n<td>🚫</td>\n<td>✅</td>\n<td>✅</td>\n<td>🚫</td>\n</tr>\n</tbody>\n</table>\n<p>其中 <code class="language-text">penv.macro</code> 的方式明显优于其他的方式, 我们现在前端的代码难免都会依赖 babel, 所以依赖 babel 实际上不算是个问题.</p>\n<p>其中就近维护变量的值很重要. 如果不能就近维护, 假设你在多个文件中设置变量时, 无论是一开始编写抑或是之后的二次修改, 都必须记得要修改多个文件. 时常会出现只改了一两处, 而漏掉其他地方的情况. 这也是我编写 <code class="language-text">penv.macro</code> 的主要动机, 希望能在一个位置看到该变量的各个环境下的值, 这样更能把握一个变量的整体情况.</p>\n<p>不依赖 webpack 也是很有必要的, 如果我们的代码需要被测试, 且测试的代码不得不依赖 webpack 的话, 配置测试环境也将会变得更复杂. 应尽力避免这样的情况发生, 徒增不必要的复杂度是不明智的.</p>\n<h2 id="babel-plugin-macros"><a href="#babel-plugin-macros" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>babel-plugin-macros</h2>\n<p><a href="https://github.com/kentcdodds/babel-plugin-macros"><code class="language-text">babel-plugin-macros</code></a> 是一个特别的 babel 插件, 特别在它本身不提供任何直接的功能. 你需要使用基于它创建出的 macro, 并且只需要在 <code class="language-text">.babelrc</code> 的 <code class="language-text">plugins</code> 中 加入 <code class="language-text">babel-plugin-macros</code>. 后续的使用只需要导入对应的 macro, 而不需要额外配置 <code class="language-text">.babelrc</code>.</p>\n<p>在我的理解中, 如果类比说 babel 是提供了一个平台, 而各个 babel 插件是基于 babel 这个平台创建的工具. 那么, <code class="language-text">babel-plugin-macros</code> 就像是基于 babel 插件之上创造了另一个平台: 我们能基于 <code class="language-text">babel-plugin-macros</code> 编写我们想要的 macro (本质上也是一个 babel 插件), 只不过接受的参数是由 <code class="language-text">babel-plugin-macros</code> 为我们处理过再传递过来的.</p>\n<p>一般的 babel 插件都是<strong>隐式</strong>的, 这么说的原因是 babel 插件要么基于某种语法, 要么基于某种写法, 当然也有的会通过注释来只对部分代码做转换. 与此相比, 基于 <code class="language-text">babel-plugin-macros</code> 编写的 macro 是<strong>显示</strong>调用和执行的. 因为我们需要 <code class="language-text">import</code> / <code class="language-text">require</code> <code class="language-text">xxx.macro</code>, 然后以类似函数调用或者其他的方式 (模板标签等) 来使用它. 虽然实际上不是函数, 但是我们确实能在 macro 中读到用户传给它的参数或者其他的形式的信息, 然后转换用户编写的代码.</p>\n<p>这是个非常具有创意的想法, <a href="https://kentcdodds.com/info/">Kent C. Dodds</a> 打开了我们使用 babel 插件的一种新思路. 以下是作者在 babel 的博客中发布的相关文章:</p>\n<p><a href="http://babeljs.io/blog/2017/09/11/zero-config-with-babel-macros">Zero-config code transformation with babel-plugin-macros · Babel</a></p>',frontmatter:{title:"penv.macro - 使环境变量的设置更加简单",date:"April 10, 2018"}}},pathContext:{slug:"/penv.macro-use/",previous:{fields:{slug:"/fe-unit-testing-practice/"},frontmatter:{title:"前端单元测试实践"}},next:!1}}}});
//# sourceMappingURL=path---penv-macro-use-ef7803b22b6b0af4d5ea.js.map