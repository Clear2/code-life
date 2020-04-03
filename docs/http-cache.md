---
id: cache
title: 浏览器缓存机制
sidebar_label: 缓存机制
---
# 缓存位置
1. Service Worker
2. Memory Cache
3. Disk Cache
4. 网络请求


## 强缓存
强缓存是通过Expires和Cache-Control两种响应头实现的
- Expires 
Expires是 http1.0 提出的一个表示资源过期时间的header 它描述的是一个绝对时间，由服务器返回。
Expires 受限于本地时间，如果修改了本地时间，可能会造成缓存失效
```

```

- Cache-Control
Cache-Control出现在HTTP /1.1, 优先级高于Expires,表示的是相对时间
```

```


## 协商缓存
当浏览器对某个资源的请求没有命中强缓存,就会发送一个请求到服务器，验证协商缓存是否命中,如果协商缓存命中,请求响应返回的http状态码为304，并显示一个Not Modify的字段

- Last-Modified, If-Modified-Since
`Last-Modified`表示本地文件最后修改日期,浏览器会在request header加上`If-Modified-Since`,询问服务器该资源是否有更新，有更新的话就会将新的资源发送回来
但是如果在本地打开缓存文件，就会造成 Last-Modified 被修改，所以在 HTTP / 1.1 出现了 ETag



