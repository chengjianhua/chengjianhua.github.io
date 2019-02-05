webpackJsonp([0xc61e44729422],{541:function(n,a){n.exports={data:{site:{siteMetadata:{title:"Blog - Jianhua Cheng",author:"Jianhua Cheng"}},markdownRemark:{id:"/Users/chengjianhua/Documents/codes/chengjianhua.github.io/src/pages/fe-unit-testing-practice/index.md absPath of file >>> MarkdownRemark",html:'<blockquote>\n<p>本文将假设读者已经对单元测试有基本了解（大致知道单元测试是什么），文中提及的话题比较多，不能一一详述，具体内容请参照提供的链接进一步了解。</p>\n</blockquote>\n<p>但凡谈到工程质量及相关实践都免不了提到 <strong>单元测试</strong>，这是一个老生常谈却长久不衰的话题。对前端来说也早就不是新鲜事物，我们在平时开发过程中使用到的开源项目基本没有能够不包含单元测试就能被广泛使用的。</p>\n<p>不少开源项目都会使用一个 badge 来标识出其测试覆盖率以使我们相信：我们正在查阅的项目是“久经考验”、“值得信任的”。下方以 react 为例：</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/0A4544C0-00DC-4C23-8E5A-3BC4F0043679-bee7b5790afc50bb3d30135c806776a5-e7ea1.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 590px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 12.11340206185567%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAACCAYAAABYBvyLAAAACXBIWXMAAAsSAAALEgHS3X78AAAAoUlEQVQI1wXB2wrBYADAcU+pXHkAb+DOrfNhZbsieQKiuFESNcW3HL59JkpZ1GwjklN/v19kfnjinF/49y+n64fg8SPwL8j1mpVUjHcei2PIdmMjpMNoHzLchcijj6NspK1QaonrmgSBQ6QlbmR7Hvm+R3VwYeW+ETOTYiFPpqQRr09ItS1qukYyZxBrWkQbgkx7iqGVKFeq6HqaTjeBsAz+ShKEUBuMiPEAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="0A4544C0 00DC 4C23 8E5A 3BC4F0043679"\n        title=""\n        src="/static/0A4544C0-00DC-4C23-8E5A-3BC4F0043679-bee7b5790afc50bb3d30135c806776a5-fb8a0.png"\n        srcset="/static/0A4544C0-00DC-4C23-8E5A-3BC4F0043679-bee7b5790afc50bb3d30135c806776a5-1a291.png 148w,\n/static/0A4544C0-00DC-4C23-8E5A-3BC4F0043679-bee7b5790afc50bb3d30135c806776a5-2bc4a.png 295w,\n/static/0A4544C0-00DC-4C23-8E5A-3BC4F0043679-bee7b5790afc50bb3d30135c806776a5-fb8a0.png 590w,\n/static/0A4544C0-00DC-4C23-8E5A-3BC4F0043679-bee7b5790afc50bb3d30135c806776a5-e7ea1.png 776w"\n        sizes="(max-width: 590px) 100vw, 590px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>甚至有些时候测试的代码量比功能代码量还要多得多：</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/D8C37397-49A2-4187-81B8-8797F9D70410-a41cb60979c4a7a7ce2c5f617e0b5f4c-71f4d.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 590px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 10.90909090909091%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAACCAYAAABYBvyLAAAACXBIWXMAAAsSAAALEgHS3X78AAAAaElEQVQI11XM0QqDMAyF4VObEa21sbIJbpO+/1Meg3ihFx/5QyBAtxChEigue5erJ2/zObhwAWMUigrRgyGC6G6CG/LG0RqtNs5LY58+LPOfpe7Mtvu+crKv339M45siSk16PnxQ9wIPU1IrW2nKn4cAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="D8C37397 49A2 4187 81B8 8797F9D70410"\n        title=""\n        src="/static/D8C37397-49A2-4187-81B8-8797F9D70410-a41cb60979c4a7a7ce2c5f617e0b5f4c-fb8a0.png"\n        srcset="/static/D8C37397-49A2-4187-81B8-8797F9D70410-a41cb60979c4a7a7ce2c5f617e0b5f4c-1a291.png 148w,\n/static/D8C37397-49A2-4187-81B8-8797F9D70410-a41cb60979c4a7a7ce2c5f617e0b5f4c-2bc4a.png 295w,\n/static/D8C37397-49A2-4187-81B8-8797F9D70410-a41cb60979c4a7a7ce2c5f617e0b5f4c-fb8a0.png 590w,\n/static/D8C37397-49A2-4187-81B8-8797F9D70410-a41cb60979c4a7a7ce2c5f617e0b5f4c-526de.png 885w,\n/static/D8C37397-49A2-4187-81B8-8797F9D70410-a41cb60979c4a7a7ce2c5f617e0b5f4c-fa2eb.png 1180w,\n/static/D8C37397-49A2-4187-81B8-8797F9D70410-a41cb60979c4a7a7ce2c5f617e0b5f4c-71f4d.png 1320w"\n        sizes="(max-width: 590px) 100vw, 590px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p><a href="https://github.com/facebook/react/commit/0752a63f59168b56b14ec45220bad97b39222604">add Portal support to React.Children calls (#11378) · facebook/react@0752a63 · GitHub</a></p>\n<p>对我们来说，无论是内部基础库还是业务代码都应该有单元测试，只是比重各不相同。也许有人觉得将开源项目类比业务代码并合理，但对于开源项目来说，单元测试是一个在持续迭代中不会意外破坏原有功能的保证。同时较高的测试覆盖率（稍后也会谈到覆盖率对于单元测试的意义）能进一步给予使用者甚至开发者足够的自信：这是一个可靠的项目，没有隐藏的 bug。单元测试对于开源项目能够解决的问题也正是我们业务代码所关心的，我们需要在持续的功能迭代中确保其中重要逻辑的正常工作以及不会破坏原有业务逻辑的正常工作。对于内部的公共项目，我们更应该像对待一个开源项目来对待它，保证足够多的测试来覆盖各种情况，以保证多个依赖于它的项目能如预期得工作。</p>\n<h2 id="测试框架的选择"><a href="#%E6%B5%8B%E8%AF%95%E6%A1%86%E6%9E%B6%E7%9A%84%E9%80%89%E6%8B%A9" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>测试框架的选择</h2>\n<p><strong>TL;DR</strong></p>\n<p>以上主要是简单介绍了一下单元测试，本部分将介绍如何开始实践单元测试。</p>\n<p>在此将主要介绍两个较受广泛使用也是我都亲自尝试过的测试工具：<a href="https://github.com/mochajs/mocha">mocha</a>、<a href="https://github.com/facebook/jest">Jest</a>。</p>\n<p>mocha 估计仍是目前最流行的测试框架。在大半年前第一次尝试编写单元测试时我随便查询了一些资料，这些资料基本都是关于 mocha 的，教程很多，很容易就能开始按照教程搭建环境了。当时的 Jest 虽然是 facebook 出品且号称不需要繁琐的配置但是终究不敌 mocha 庞大的用户群。出于对稳妥的考虑，我仍然选择的 mocha。当然在现在尝试过 Jest 的我看来，我会极力推荐准备写测试以及没有在使用 Jest 的人选择 Jest，这是个非常棒的选择。</p>\n<p>接下来我将就几个切入点来分别简述两者的区别与优缺点。</p>\n<h3 id="断言"><a href="#%E6%96%AD%E8%A8%80" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>断言</h3>\n<p>mocha 没有集成 <strong>断言</strong> 库，当然不使用断言库的话也可以使用 node 内置的 <code class="language-text">assert</code>。也可以自己选择断言库，当时最容易搜到的也就是 <a href="http://chaijs.com/">Chai</a>。当然，除此之外还有很多其他的选择，mocha 的文档里就有提到多个选择 <a href="https://mochajs.org/#assertions">Mocha - Assertions</a>。</p>\n<p>当时我选择的是 chai。第一次使用 chai 中 BDD 风格的断言（should）时我非常兴奋，因为它的 API 具备极高的可读性，写起测试来非常的顺手。以下举个例子，一看便知：</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript">user<span class="token punctuation">.</span>should<span class="token punctuation">.</span>be<span class="token punctuation">.</span><span class="token function">an</span><span class="token punctuation">(</span><span class="token string">\'object\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>that<span class="token punctuation">.</span>have<span class="token punctuation">.</span><span class="token function">property</span><span class="token punctuation">(</span><span class="token string">\'nick\'</span><span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>顺带一提，以上这种方式是通过扩展 <code class="language-text">Object.prototype</code> 来将 <code class="language-text">should</code> 挂载到所有对象上（所有对象都继承自 <code class="language-text">Object</code>），从而实现了这种链式调用的方式。基于以上的实现原理，这种断言风格也是有缺陷的：如果 <code class="language-text">user</code> 的值是 <code class="language-text">null</code> 的情况下，在 <code class="language-text">.should</code> 这就会抛出异常了。原因是 <code class="language-text">null</code> 不继承自 Object.变通方法则是换成这种写法 <code class="language-text">should(user).be</code> 。</p>\n<p>以上稍微扯远了点，chai 虽然跟 mocha 本身无关，但是作为 mocha 常见搭配的断言库值得一提。</p>\n<hr>\n<p>相比之下，Jest 自身是集成了断言功能的，<code class="language-text">expect</code> 挂载在 <code class="language-text">global</code> 上。举个例子：</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token function">expect</span><span class="token punctuation">(</span>drink<span class="token punctuation">)</span><span class="token punctuation">.</span>not<span class="token punctuation">.</span><span class="token function">toHaveBeenCalled</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>Jest 的文档中并不推荐使用其他第三方的断言库，毕竟自身集成的断言对 Jest 本身有更良好的适配。这样一来也省去了选择的纠结。自身集成的 <code class="language-text">expect</code> 挺好用的，API 也很丰富，足以支持各种复杂条件的断言。</p>\n<p>更值得一提的是，如果你之前的测试代码中的断言使用的是 chai 的话，仍然可以继续使用，这样进一步减少了迁移成本。并且 Jest 提供了测试代码迁移工具 <a href="https://github.com/skovhus/jest-codemods">GitHub - skovhus/jest-codemods: Codemods for migrating to Jest 👾</a>，足以将原先使用其他测试框架编写的测试代码在不需要人工的情况下自动转换成 Jest 风格的测试代码。</p>\n<p>具体细节可以查看 <a href="http://facebook.github.io/jest/docs/en/migration-guide.html">Migrating to Jest · Jest</a>。</p>\n<h3 id="测试覆盖率报告"><a href="#%E6%B5%8B%E8%AF%95%E8%A6%86%E7%9B%96%E7%8E%87%E6%8A%A5%E5%91%8A" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>测试覆盖率报告</h3>\n<p>mocha 自身不集成 <strong>测试覆盖率</strong> 功能。这项功能能让我们直观地从数字上感受到我们测试覆盖的情况和效果。一般用于实现这项功能所用的是 <a href="https://istanbul.js.org/">Istanbul, a JavaScript test coverage tool.</a>。当然它所提供的不仅仅是测试覆盖率，还有具体测试覆盖到哪一行、哪一个条件分支、每条语句分别执行了多少次等功能。</p>\n<p>当我们将它与 mocha 结合的话我们通常会使用 <a href="https://github.com/istanbuljs/nyc">GitHub - istanbuljs/nyc: the Istanbul command line interface</a> 来生成我们的测试报告。使用方式大概如下：</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash">nyc --reporter<span class="token operator">=</span>html --reporter<span class="token operator">=</span>text mocha\n</code></pre>\n      </div>\n<p>以上命令将会生成两种测试报告，一种 <code class="language-text">--reporter=text</code> 将在终端输出测试覆盖率相关的文本信息。另一种 <code class="language-text">--reporter=html</code> 将会生成一个 <code class="language-text">coverage</code> 文件夹，并且其中的 <code class="language-text">coverage/index.html</code> 可以在浏览器中打开。打开之后就是一个非常详细的测试覆盖率报告页面，前面提到的 <em>测试覆盖到哪一行、哪一个条件分支、每条语句分别执行了多少次</em> 就是在这个页面里可以查看到。</p>\n<hr>\n<p>毫不意外，Jest 自身集成了 istanbul，你所需要关心的也只是在运行测试的时候多加一个 <code class="language-text">--coverage</code> 选项而已。coverage 也是可以配置的，具体参考 <a href="http://facebook.github.io/jest/docs/en/configuration.html#coveragereporters-array-string">Configuring Jest · Jest</a>。</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash"><span class="token comment"># npm test</span>\njest\n\n<span class="token comment"># npm run coverage</span>\n<span class="token function">npm</span> run <span class="token function">test</span> -- --coverage\n</code></pre>\n      </div>\n<h3 id="测试环境"><a href="#%E6%B5%8B%E8%AF%95%E7%8E%AF%E5%A2%83" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>测试环境</h3>\n<p>当你需要测试的部分逻辑需要使用到浏览器才具备的一些 API，例如：<code class="language-text">document</code>、<code class="language-text">location</code> 以及 DOM 操作等等浏览器环境才具备的 API。此时我们不可避免地需要 mock 这些实现。如果你不是只想简单地让测试代码不会在 node 环境中失败，而是期望仍然具备应有的逻辑，那么我们就需要引入 <a href="https://github.com/tmpvar/jsdom">GitHub - tmpvar/jsdom: A JavaScript implementation of the WHATWG DOM and HTML standards, for use with node.JavaScript</a>。</p>\n<p>当你按照文档设置之后它可以为我们在 node 端模拟出一个高度还原的浏览器环境。使用 mocha 的话也就是在一个 <code class="language-text">setup.js</code> 中完成这一步骤，这个文件将先于所有测试文件先运行且仅运行一次，用于预先配置好测试环境。</p>\n<hr>\n<p>Jest 依然自身集成了 <code class="language-text">jsdom</code>，且默认开启。可以通过 <a href="http://facebook.github.io/jest/docs/en/configuration.html#testenvironment-string">Configuring Jest · Jest</a> 中的配置项改变默认配置。</p>\n<h3 id="mock"><a href="#mock" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>mock</h3>\n<p>单元测试不可避免得需要用到 mock，在这里 mock 的大致意思是：屏蔽一个函数或一个模块的方法（属性）原有实现或值，然后使用我们期望的实现或值代替它。</p>\n<p>针对于方法的 mock，由于 mocha 本身并没有支持这一相关的功能，通常我们会选择 <a href="http://sinonjs.org/">Sinon.js - Standalone test spies, stubs and mocks for JavaScript. Works with any unit testing framework.</a>(<a href="http://sinonjs.org/">http://sinonjs.org/</a>) 来完成 mock 相关操作。</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token function">it</span><span class="token punctuation">(</span><span class="token string">\'returns the return value from the original function\'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">var</span> callback <span class="token operator">=</span> sinon<span class="token punctuation">.</span><span class="token function">stub</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">returns</span><span class="token punctuation">(</span><span class="token number">42</span><span class="token punctuation">)</span>\n  <span class="token keyword">var</span> proxy <span class="token operator">=</span> <span class="token function">once</span><span class="token punctuation">(</span>callback<span class="token punctuation">)</span>\n\n  assert<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span><span class="token function">proxy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">42</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>如果是依赖模块的 mock 由于涉及到依赖的问题就更棘手了，可以借助于 <a href="https://github.com/boblauer/mock-require">GitHub - boblauer/mock-require: Simple, intuitive mocking of Node.JavaScript modules.</a> 这样的库来完成。</p>\n<hr>\n<p>Jest 自身集成了对 mock 的支持。使用 Jest 编写测试时，在测试代码中可通过全局对象 <code class="language-text">jest</code> 中的属性方法 <code class="language-text">fn</code> 创建一个 spy，这是针对方法的 spy。还有一个类似的是 <code class="language-text">jest.spyOn</code> ，用于生成一个作用于对象方法的 spy 或 mock。</p>\n<p>但是 Jest 中的 <code class="language-text">jest.spyOn()</code> 不是太强大，只能对对象中的方法进行 mock，如果是非方法属性的话：</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">1. 通过一个变量存储原始值，随后赋予指定测试所用值，在测试完成之后再还原到初始值；\n2. 使用 `jest.spyOn` 创建一个改对象属性值的 getter，在 getter 中返回自己期望的值，测试完成之后去除该 getter。</code></pre>\n      </div>\n<p>以上两种方式都略显繁琐，当然也能自己封装成一个工具方法。其实可以使用 <code class="language-text">sinon.stub</code> 来完成以上的功能，在 Jest 已有工具不足以满足使用需求的情况下，我们还是需要借助于社区来满足，示例如下：</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">const</span> myObj <span class="token operator">=</span> <span class="token punctuation">{</span>\n  prop<span class="token punctuation">:</span> <span class="token string">\'foo\'</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> stub <span class="token operator">=</span> sinon<span class="token punctuation">.</span><span class="token function">stub</span><span class="token punctuation">(</span>myObj<span class="token punctuation">,</span> <span class="token string">\'prop\'</span><span class="token punctuation">)</span>\n\nstub<span class="token punctuation">.</span><span class="token keyword">get</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">getterFn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token string">\'bar\'</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\nmyObj<span class="token punctuation">.</span>prop <span class="token comment">// \'bar\'</span>\n</code></pre>\n      </div>\n<p>这个工具的好处是随后可以使用 <code class="language-text">stub.restore()</code> 来恢复到初始状态，比手写更加方便以及语义化。</p>\n<p>如果是针对于模块的 mock，那 jest 的支持就更是强大无比了，自身集成了 <code class="language-text">jest.mock()</code> 来完成对模块的 mock。有一个配置项是能开启 <strong>auto mock</strong>。顾名思义，开启此项后所有的模块中对其他模块的依赖都将会被自动 mock 掉，替换成一个没有具体实现的模块。我本人目前看来不是很推荐这样使用。详见 <a href="http://facebook.github.io/jest/docs/en/manual-mocks.html#content">Manual Mocks · Jest</a>。</p>\n<hr>\n<p>无论是 mocha 或者 Jest 本身在 mock 的过程中都会遇到一个问题：如何 mock 模块中一个没有被导出的私有变量或方法。对此有个 <a href="https://github.com/speedskater/babel-plugin-rewire">GitHub - speedskater/babel-plugin-rewire: A babel plugin adding the ability to rewire module dependencies. This enables to mock modules for testing purposes.</a> 能够做到，缺点是很久没有在维护了，好在尚能使用，暂时没有找到比较好的替代。</p>\n<h3 id="snapshot"><a href="#snapshot" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Snapshot</h3>\n<p>这个特性算是 Jest 的王牌之一了，它能够记住你当时所测试对象（可以是对象、React element 等）的结构并输出成一个单独的 <code class="language-text">xxx.snap</code> 文件用于保存结构。对于对象就会生成一个类似 JSON 的结构，如果是 React Element 的话会生成一个类似于 DOM 的结构。</p>\n<p>这个功能带来的好处是：当你下次改变代码实现时，如果是无意中改变导致的快照测试失败，你能很快地发现是错误的实现产生了不该有的影响，可以修复实现直到测试通过；如果是有意的就需要传递一个 <code class="language-text">--updateSnapshot</code> 来更新生成新的快照。对于测试 React Component 的话非常的便利。</p>\n<p>以下给出一个我们实际代码中生成的快照信息：</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">exports[`track/tracker should render correct DOM structure 1`] = `\n&lt;withTrackContext(OriginalTrackerChildren)&gt;\n  &lt;OriginalTrackerChildren\n    tracker={\n      Object {\n        &quot;action&quot;: [Function],\n        &quot;config&quot;: [Function],\n        &quot;page&quot;: [Function],\n        &quot;track&quot;: Object {},\n      }\n    }\n  &gt;\n    &lt;div&gt;\n      Tracker Children\n    &lt;/div&gt;\n  &lt;/OriginalTrackerChildren&gt;\n&lt;/withTrackContext(OriginalTrackerChildren)&gt;\n`;</code></pre>\n      </div>\n<p>还有一个很好的使用场景就是错误信息。我们会在某些条件下输出错误信息，如果这些错误信息是很重要的话，我们除了需要测试方法是否会抛出异常外，还需要测试错误信息输出的具体内容。在 mocha 中使用 chai 的话会是这样的：</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token function">expect</span><span class="token punctuation">(</span>badFn<span class="token punctuation">)</span><span class="token punctuation">.</span>to<span class="token punctuation">.</span><span class="token keyword">throw</span><span class="token punctuation">(</span>\n  Error<span class="token punctuation">,</span>\n  <span class="token regex">/This is a long error message that is too troublesome to copy it from codes./</span>\n<span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>这样写的弊病除了繁琐之外还有一点：错误信息存在了冗余。除此之外，当在实现中改变了错误信息还需要在对应的测试中修改。如果使用 Jest 的快照功能的话则是这样的：</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token function">expect</span><span class="token punctuation">(</span>badFn<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toThrowErrorMatchingSnapshot</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>以上代码会生成一个错误信息的 snapshot。</p>\n<p>mocha 也能通过一些库来达到以上类似的效果，不过已经比较到了这里我相信你们会选择 Jest 的 : )</p>\n<h3 id="watch"><a href="#watch" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Watch</h3>\n<p>当你开启 <code class="language-text">--watch</code> 模式时，mocha 会在你改动之后运行所有的测试，无论是不是跟当前文件相关的测试，除非手动指定希望被监听的文件列表。而 Jest 可就不是这样了。它不会运行所有的测试，而是会识别出当前文件相关的其他测试文件并运行，可大大缩短监听测试的时间，同时也提高了体验。举个例子：</p>\n<p>如果你修改了 <code class="language-text">a.js</code>，且 <code class="language-text">b.js</code> 中依赖了 <code class="language-text">a.js</code> 这个模块，此时除了会运行 <code class="language-text">a.spec.js</code> 之外还会运行 <code class="language-text">b.spec.js</code> 。这很合理！</p>\n<p>这样带来的好处是如果你使用 <a href="https://github.com/okonet/lint-staged">GitHub - okonet/lint-staged: 🚫💩 — Run linters on git staged files</a> 的话，你甚至可以在提交代码前仅运行 staged files 相关的测试，这样会导致测试失败的代码永远不会进入代码库。当然这样是一个很严格的实践，根据具体情况斟酌。</p>\n<hr>\n<p>以上是几个我们写测试时比较关心的特性，还有很多特性例如 <strong>异步测试</strong> 之类的特性二者大同小异，所以就不详细列举这些特性了。在我的实际使用中，我都通过 mocha 和 Jest 写了不少测试单元测试，都保证了一些公有依赖的功能在迭代改进、重构中没有被意外破坏。有几次甚至我都怀疑是测试框架有 bug，但是最终还是被证明是隐藏很深的 bug 导致的。这更让我坚定了单元测试对于工程的作用。</p>\n<p><strong>其中使用 Jest 编写测试会方便很多，减少了很多繁琐的配置</strong>，几乎是零配置（只需要少量简单的配置即可）。同时 snapshot 以及 mock 等功能极大的<strong>节省了我测试的时间</strong>，所以我会极力推荐 Jest，即使你不是使用 React 也是一样能享受到它所有的有点，它与 React 并没有依赖关系。现在我们内部公共模块的测试就是使用 Jest 完成的，👍！</p>\n<p>以上跟 mocha 有关的配置我轻描淡写的就带过了，实际上 mocha 的配置是需要仔细阅读文档，尝试过一些失败之后才能配置成功的。不得不说在有些时候我们并不关心所谓的灵活性，只期望能尽快开始，毕竟万事开头难，被拦在了开头就更不好了。mocha 的配置确实繁琐了些……</p>\n<h2 id="unit-test-vs-integration-test"><a href="#unit-test-vs-integration-test" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Unit Test v.s. Integration Test</h2>\n<p>以上我推荐了 Jest 作为我们的测试工具，现在我要谈一下在写测试中我们经常会纠结的一个问题：<strong>如何区分单元测试和集成测试</strong>。对于这个问题我也不是很能说清楚，概念也很无趣。某次我在一篇文中中看到了这样一段话我觉得非常有道理：</p>\n<blockquote>\n<p>The line between integration and unit tests is a little bit fuzzy. Regardless, I think the biggest thing you can do to write more integration tests is to just stop mocking so much stuff.<br>\n<a href="https://blog.kentcdodds.com/write-tests-not-too-many-mostly-integration-5e8c7fff591c">Write tests. Not too many. Mostly integration. – Kent C. Dodds</a></p>\n</blockquote>\n<p>这样的定义简单粗暴但却很有效，如果一个模块依赖了很多模块，我们如果不去 mock 那些依赖而是直接运行测试，这就相当于一个集成测试。因为这同时测试了多个模块是否正常工作（换个角度来说集成测试和单元测试是多么的相似）。</p>\n<blockquote>\n<p>That means that the code you use to set up network requests and request handlers won’t need unit tests. Use integration tests for those, instead.<br>\n<a href="https://medium.com/javascript-scene/mocking-is-a-code-smell-944a70c90a6a">Mocking is a Code Smell – Eric Elliott</a></p>\n</blockquote>\n<p>一定程度上我认可以上所说。这位作者认为当你需要模拟请求返回的值时也许你需要的是集成测试而不是单元测试。毕竟单元测试不是用来覆盖所有代码的，当设计多个模块之间的集成以及复杂 IO 等情况也许就不要使用单元测试来覆盖相应逻辑了，而使用集成测试甚至端对端测试更好。</p>\n<h2 id="tips"><a href="#tips" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Tips</h2>\n<blockquote>\n<p><strong>测试代码也是 code base 的一部分</strong></p>\n</blockquote>\n<p>测试代码也是需要人来维护的，测试代码也要写得尽量的利于维护。需要复用的也要做到复用，否则之后改动测试的时候也是一场灾难。</p>\n<blockquote>\n<p><strong>使用 Snapshot 小程度上代替端对端测试</strong></p>\n</blockquote>\n<p>对于创业公司团队，有些时候一些最佳实践我们未必有人力与时间去遵循，但是单元测试这件事确实是值得的，<strong>回报 >> 产出</strong>。尤其是在频繁的迭代中，也许我们无法使用这一套去覆盖到每个页面的测试，但是公共模块必须使用。对于页面也有迂回的替代品，在没有端对端测试的情况下，我们可以很简单的生成页面组件的快照。可以一定程度保证上页面不会被改坏。</p>\n<p>在我们现有的流程中，如果某个开发者意外的 push 了一段代码会导致页面渲染异常，那么在 git push 触发了 GitLab CI 之后，会在 pipeline 中的 test 环节失败，这样一来发布也会失败。并且邮件会通知到 push 代码的那位开发者。测试结合 CI 能尽快的发现问题。当然如果你期望更早发现问题的话，推荐两个辅助工具：<a href="https://github.com/typicode/husky">husky</a> 和 <a href="https://github.com/okonet/lint-staged">lint-staged</a>结合。</p>\n<blockquote>\n<p><strong>测试覆盖率不是全部</strong></p>\n</blockquote>\n<p>不能一昧追求测试覆盖率，测试覆盖率也有几种指标：</p>\n<ul>\n<li>Statements：语句。这个是我们一般常见的测试覆盖率所采用的指标，它指的是所执行的语句占全部语句的百分比。</li>\n<li>Branch：分支。<code class="language-text">if else</code>、<code class="language-text">? :</code> 以及 <code class="language-text">switch</code> 等条件语句都会产生分支，这个指的是测试所覆盖的分支数占据总分支数的百分比。</li>\n<li>Functions：函数。</li>\n<li>Lines：行数。</li>\n</ul>\n<p>前两个是常用比较有意义的指标。其中不能过度依赖第一个指标，因为如果代码的分支很多，而分支中的逻辑又很重要，那么即使每条语句都运行到了但是各种条件组合下的分支却没有得到充分测试，这样的测试其实并不能保证足够的安全性。</p>\n<p>除此之外不能盲目地追求测试覆盖率，不是越高的测试覆盖率就一定越好。我们只需要测试我们值得测试的部分，写测试花费的时间也是成本。<strong>从 90 到 100 所需要付出的时间远多于 60 ~ 85</strong>。我们应该以效率为主，除非是时间充裕或者是非常重要的模块，否则不要盲目追求高覆盖率。</p>\n<p>……</p>\n<p>很多细节话题展开都能是一篇小文章，只能大致介绍一二，即使如此，以上篇幅不觉间已经过于冗长……我们还在探索如何更好地维护我们的代码，希望有机会能分享更多，谢谢阅读 😊</p>',frontmatter:{title:"前端单元测试实践",date:"December 07, 2017"}}},pathContext:{slug:"/fe-unit-testing-practice/",previous:{fields:{slug:"/first-triage-to-unite-test-in-mocha/"},frontmatter:{title:"Mocha 和 Chai 入门初探"}},next:{fields:{slug:"/penv.macro-use/"},frontmatter:{title:"penv.macro - 使环境变量的设置更加简单"}}}}}});
//# sourceMappingURL=path---fe-unit-testing-practice-73de4b152019a21c8ce8.js.map