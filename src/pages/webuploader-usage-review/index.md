---
title: 使用 WebUploader 解决安卓微信浏览器上传图片中遇到的 bug
date: 2016-04-09 02:03:31
tags: [JavaScript,插件,上传,微信]
---

# 微信浏览器上传图片 bug 的原因

微信在新版本中采用的是自己的 X5 内核浏览器，而在较老的版本中还有可能是安卓的原生浏览器。具体的环境我也不太了解，但是经过实际多台安卓机型的测试，我采取的方案可以基本确保在安卓机中微信浏览器的成功上传。苹果机型没问题，因为微信的 ios 客户端使用的是 Safari 的内核，没有各种坑，且效果最好。

<!-- more -->

这里给出一个 `WebUploader` 官方关于移动端适配的 [issues][1] 链接。里面提供的方法确实有效，但就是解决的方案并没有很清楚的展示出来，从该 issues 中有好几个人用户提出如何修改就能知道了。

# 开始时遇到的问题

## 环境

后台使用 `Spring MVC [V 4.08]`，前端使用一个开源的 `HTML5` 框架

## 问题

ios 可完美上传，安卓手机一半以上不太支持，出现进度条卡死，图片无法上传成功而且只能上传 png 格式图片的问题（后来证明是由于压缩失败引起的，在解决中详细指出）。发布到服务器上正式运营以后，发现部分用户只填写了文字信息，无法上传图片，不好统计数据，但是这样的 BUG 率显然是不行的，接下来就给出我的解决方案吧，经过实际测试应该是没问题的，不保证完全有效，因为原理不是太清楚，仅供参考。

# 后来的解决方案

## 第一步，sendAsBinary: true

我先是按照 issues 中给出的第一个解决方法，设置 `sendAsBinary: true`，后台不做任何修改的情况下会产生 `500` 的错误，但是此时解决了进度条卡死的问题（当然啊！图片直接就上传失败了！）……根据 issues 中 **2betop** 的回答，此时获取文件应该是直接获取文件的二进制流。

之前获取图片的方式是使用 `Spring` 自带的 `MultipartHttpServletRequest` 将 `HttpServletRequest` 的实例 `request` 转换，然后获取多个文件的信息。下方代码根据实际代码删减不必要的细枝末节得出。

```java
        MultipartHttpServletRequest multipartRequest = (MultipartHttpServletRequest) request;

        // 获取上传文件的列表
        Map<String, MultipartFile> fileMap = multipartRequest.getFileMap();

        // 图片上传前的原始名
        String originalName;

        // 循环获取多文件上传时文件列表中的每个文件对象
        for (Map.Entry<String, MultipartFile> entity : fileMap.entrySet()) {

            // 上传文件
            MultipartFile mf = entity.getValue();

            // 文件上传前的原始名
            originalName = mf.getOriginalFilename();

            // 文件扩展名
            String fileExt = originalName.substring(originalName.lastIndexOf(".") + 1).toLowerCase();

            // 文件的绝对路径File
            File uploadFile = new File(uploadAbsolutePath + "/" + newName);

            try {
                FileCopyUtils.copy(mf.getBytes(), uploadFile);
            } catch (IOException ioException) {
                logger.error("图片保存到文件夹中出错！", ioException);
            } catch (Exception e) {
                logger.error("文件没有复制到指定的目录下", e);
            }

        }
```

这是原本的获取方式，`500` 报错时指示是第一行代码出错，无法转换，因为此时 `WebUploader` 在设置了 `sendAsBinary: true`后 并没有使用 `content-type: multipart/form-data` 上传文件，而是 `content-type: application/ocet-stream`,源码中也是这么写的，但是实际获取的请求头中并没有看到这个字段，而只是图片的类型.下列给出我使用 Chrome 的 devTools 保存下来的请求信息,只贴出 `headers` 中的字段值（针对同一个上传 API 提出请求）：

**500 错误时的请求头**

```json
          "url": "http://localhost:8787/lostFound/front/release/upload?releaseType=0&orderId=330&id=WU_FILE_1&name=20140120_035024000_iOS.jpg&type=image%2Fjpeg&lastModifiedDate=Sat+Jan+31+2015+01%3A32%3A34+GMT%2B0800+(%C3%A4%C2%B8%C2%AD%C3%A5%C2%9B%C2%BD%C3%A6%C2%A0%C2%87%C3%A5%C2%87%C2%86%C3%A6%C2%97%C2%B6%C3%A9%C2%97%C2%B4)&size=81666",
          "httpVersion": "HTTP/1.1",
          "headers": [
            {
              "name": "Origin",
              "value": "http://localhost:8787"
            },
            {
              "name": "Accept-Encoding",
              "value": "gzip, deflate"
            },
            {
              "name": "Host",
              "value": "localhost:8787"
            },
            {
              "name": "Accept-Language",
              "value": "zh-CN,zh;q=0.8"
            },
            {
              "name": "User-Agent",
              "value": "Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1"
            },
            {
              "name": "Content-Type",
              "value": "image/jpeg"
            },
            {
              "name": "Accept",
              "value": "*/*"
            },
            {
              "name": "Referer",
              "value": "http://localhost:8787/lostFound/"
            },
            {
              "name": "Cookie",
              "value": "JSESSIONID=2839511C91E9ECE62D155C6EE18F3259; JSESSIONID=64B53863E1C7D82B96927F298A864E18"
            },
            {
              "name": "Connection",
              "value": "keep-alive"
            },
            {
              "name": "Content-Length",
              "value": "81666"
            }
          ],
          "queryString": [
            {
              "name": "releaseType",
              "value": "0"
            },
            {
              "name": "orderId",
              "value": "330"
            },
            {
              "name": "id",
              "value": "WU_FILE_1"
            },
            {
              "name": "name",
              "value": "20140120_035024000_iOS.jpg"
            },
            {
              "name": "type",
              "value": "image%2Fjpeg"
            },
            {
              "name": "lastModifiedDate",
              "value": "Sat+Jan+31+2015+01%3A32%3A34+GMT%2B0800+(%C3%A4%C2%B8%C2%AD%C3%A5%C2%9B%C2%BD%C3%A6%C2%A0%C2%87%C3%A5%C2%87%C2%86%C3%A6%C2%97%C2%B6%C3%A9%C2%97%C2%B4)"
            },
            {
              "name": "size",
              "value": "81666"
            }
          ]，
          "bodySize": 0
```

**在不修改 sendAsBinary: true 之前成功上传的请求头**

```json
          "url": "http://localhost:8787/lostFound/front/release/upload",
          "httpVersion": "HTTP/1.1",
          "headers": [
            {
              "name": "Origin",
              "value": "http://localhost:8787"
            },
            {
              "name": "Accept-Encoding",
              "value": "gzip, deflate"
            },
            {
              "name": "Host",
              "value": "localhost:8787"
            },
            {
              "name": "Accept-Language",
              "value": "zh-CN,zh;q=0.8"
            },
            {
              "name": "User-Agent",
              "value": "Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1"
            },
            {
              "name": "Content-Type",
              "value": "multipart/form-data; boundary=----WebKitFormBoundaryLeVpfViKLf1xLdIr"
            },
            {
              "name": "Accept",
              "value": "*/*"
            },
            {
              "name": "Referer",
              "value": "http://localhost:8787/lostFound/"
            },
            {
              "name": "Cookie",
              "value": "JSESSIONID=A76C40D04276501F54675AA02AE61467; JSESSIONID=64B53863E1C7D82B96927F298A864E18"
            },
            {
              "name": "Connection",
              "value": "keep-alive"
            },
            {
              "name": "Content-Length",
              "value": "44210"
            }
          ],
          "queryString": [],
          "bodySize": 929,
```

比较两者的区别，发现区别：

* `content-type`： 修改为 `sendAsBinary: true` 以后，这个值变为 `image/jpeg`， 而之前是 `multipart/form-data`，所以不能再使用 `MultipartHttpServletRequest`，后端获取改为获取文件流。
* `queryString`：启用二进制上传以后，参数直接添加到 `Url` 中。
* `bodySize`：启用之后变为 `0`，启用之前不为 0

先修改后端获取方式，代码更改如下：

```java
        File file = new File(uploadAbsolutePath);

        if (!file.exists() && !file.mkdirs()) {
            // 如果file对象不存在，那么就将该对象的路径名中不存在的文件夹目录建立出来
        }

        // 文件扩展名
        String fileExt = name.substring(name.lastIndexOf(".") + 1).toLowerCase();

        // 文件的绝对路径File
        File uploadFile = new File(uploadAbsolutePath + "/" + newName);

        try {
            // 将上传的图片二进制流保存为文件
            FileCopyUtils.copy(request.getInputStream(), new FileOutputStream(uploadFile));
        } catch (IOException ioException) {
            logger.error("图片保存到文件夹中出错！", ioException);
        } catch (Exception e) {
            logger.error("文件没有复制到指定的目录下" ,e);
        }
```

此时后端就能够获取前端上传的图片了，ios 机型（iPhone 6s）依然没问题，安卓上传 png 格式的图片没有任何问题，但是 jpg 依然无法上传。在后端的时候，打印 `request` 的 `headers`，发现安卓机型上传 jpg 图片是会丢失 `content-type`，值为空。结合 issues 中的判断，也许是安卓机型在压缩 jpg 格式图片时出了问题，先解决再试试看！

## 第二步：加上 androidpatch

根据官方说明，使用 `webuploader.custom.js`，其中将 runtime/html5/androidpatch.js 打包了进来。然后在没有修改任何代码的情况下，经过五个手机的测试，新老机型：华为荣耀、魅蓝、联想等等的测试，安卓机可以在微信中随意上传图片了。这是个大坑啊！说明无法上传 jpg 格式图片的原因竟是压缩 jpg 格式图片的时候出错，导致进度条卡死，上传失败。

# 总结使用心得

按照以上的总结，我想下一次我应该能再一次利用这一次的经验解决微信上传图片的坑了~也懂得从`request` 的 `headers` 中寻找 bug 发生的原因，`WebUploader` 是个很优秀的开源插件，源码也写的很有条理，清晰易读，虽然我并没有读完。现在阅读框架源码是越来越轻松了，加油，下个目标是正在学习的 `React.js`。

[1]: https://github.com/fex-team/webuploader/issues/185
