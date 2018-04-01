---
title: 使用 passport.js 来完成登录验证
date: 2016-06-22 10:19:24
tags: [JavaScript, passport, Authenticate]
---

**先啰嗦一段背景**

介绍一下项目所使用的技术栈。`Node.js`，使用 `Express` 来完成后端服务器的架构，这个时候就遇到了一个问题了。在我以前，是用 `Java` 来开发 Web 后端服务器，那时我采用 `Spring` 框架来完成，登录的验证就是比对数据库中的用户名密码与当前用户所输入的用户名密码，而且如果希望拦截未登录的用户的访问某些特定的网址时，我可以添加 `Spring` 自定义的拦截器实现来实现用户未成功验证时的拦截。但是现在我使用的是 `Node.js` 来完成开发，不知道该怎么做了，没办法只好 google 一下了，结果推荐较多的就是 `passport.js` 。

这个时候已经确定就使用这个 js 库了，好的，开工！但是问题来了，我该怎么使用呢，官方是有文档，英文倒也还好，但总感觉就是有那么点不够清晰，有些细节不一定能好好的解决，为了方便更多人使用这个框架，经过配置成功以后，想把这个的经验分享出来，**好了，进入正题~**

<!-- more -->

## 配置环境

### 使用的依赖包

默认使用的环境就是 `express` 搭建的服务器。

```bash
# passport 需要 session 的支持，
#由于使用的是 express.js，所以这里使用 express-session
npm install express-session --save

# 当然要下载 passport ……
npm install passport --save

# passport支持一系列的 OAuth 第三方验证，
#而我们一般的使用场景为验证自己项目中的用户
#，所以这里使用 passport-local
npm install passport-local --save
```

### 配置服务器

先搭建好服务器用于 `passport` 的配置，加上 `session` 的配置，其中 `passport-config.js` 文件先导入不管具体实现，不影响我的描述，稍后将在下方给出详细配置方法。

```javascript
/**
 * /server.js
 */

import express from 'express'
import expressSession from 'express-session'
// 导入一个我们配置好了 passport 的 js 文件
import passport from '../core/passport-config'

const server = express()

// ... 不相干的 express 的配置

// 配置 session，passport 所需的基础，必须有
server.use(
  expressSession({
    // 你喜欢的任意名字作为一个加密用的字符串
    secret: 'whatever the name you like',
    resave: false,
    saveUninitialized: false,
  })
)
// 初始化调用 passport
server.use(passport.initialize())
server.use(passport.session())
//
```

到这里为止，我们在服务器上的设置就完成了，接下来看看如何配置 `passport`。

### 配置 passport.js

**我把代码的作用写在了以下代码的注释中**，里面详细讲述了大致的原理及作用。

```javascript
/**
 * /core/passport-config.js
 */

import passport from 'passport'
import LocalStrategy from 'passport-local'

// 这里引入的是一个操作数据库的 User 工具函数
import User from '../model/User'

// 这个配置就是参照官方示例来的，不过官方的讲解不够详细
// 我将在这里详细讲讲是怎样获取用户并验证是否正确
passport.use(
  new LocalStrategy(
    /**
     * @param username 用户输入的用户名
     * @param password 用户输入的密码
     * @param done 验证验证完成后的回调函数，由passport调用
     */
    function(username, password, done) {
      // 在编写 User.findUniqueUserByUsername 时，包含两个参数，一个是 username
      // 一个是我们现在所传入的回调函数，我们将获取到的用户信息传递给我们的回调函数
      User.findUniqueUserByUsername(username, function(err, user) {
        if (err) {
          console.log('出现错误.')
          return done(err)
        }
        if (!user) {
          console.log('没有找到对应的用户名.')

          return done(null, false, { message: '没有找到对应的用户名.' })
        }
        if (user.password != password) {
          console.log('密码匹配有误.')

          return done(null, false, { message: '密码匹配有误.' })
        }

        return done(null, user)
      })
    }
  )
)

// serializeUser 在用户登录验证成功以后将会把用户的数据存储到 session 中（在这里
// 存到 session 中的是用户的 username）。在这里的 user 应为我们之前在 new
// LocalStrategy (fution() { ... }) 中传递到回调函数 done 的参数 user 对象（从数据// 库中获取到的）
passport.serializeUser(function(user, done) {
  done(null, user.username)
})

// deserializeUser 在每次请求的时候将会根据用户名读取 从 session 中读取用户的全部数据
// 的对象，并将其封装到 req.user
passport.deserializeUser(function(username, done) {
  User.findUniqueUserByUsername(username, function(err, user) {
    if (err) {
      return done(err)
    }
    done(null, user)
  })
})

// 这是封装了一个中间件函数到 passport 中，可以在需要拦截未验证的用户的请求的时候调用
passport.authenticateMiddleware = function authenticationMiddleware() {
  return function(req, res, next) {
    if (req.isAuthenticated()) {
      return next()
    }
    res.redirect('/login')
  }
}

export default passport
```

到此基本的配置到此结束，以我的经验，这足以来完成基本的验证使用了。

## 使用

接下来讲讲如何在 _server.js_ 中使用我们上面配置好的 _passport.js_， 我们在 **配置服务器** 中已经加载并使用了我们的配置，现在让我们看看如何在我们的路由中使用它。

```javascript
// ------------
// server.js
// ------------

import passport from '../core/passport-config'

// 如下所示，我们在路由的请求地址 “/login” 和 后续的请求处理函数之间调用
// passport.authenticate('local')，即可完成对用户输入的用户名密码的验证
server.post('/login', passport.authenticate('local'), function(req, res) {
  // req.user 中会包含在 deserializeUser 函数中传入的 user 数据
  console.log('-------req.user-----------')
  console.log(req.user)
  console.log('-------req.user-----------')

  let returnData = {
    isSuccess: true,
    uer: req.user,
  }

  res.send(JSON.stringify(returnData))
})

// 调用我们之前在 passport-config 中封装的用于验证用户是否已经被验证的中间件函数
// 即可限制未被验证的用户不能请求该路由，返回 Error: 401(Unauthorized)
server.get('/testAuth', passport.authenticateMiddleware(), function(req, res) {
  // ......
})
```

## 总结

经过实例代码我们知道了如何配置以及使用 passport。解释内容请读者留心代码注释。
