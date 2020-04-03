---
id: this
title: this
---

- this到底是什么?
当一个函数被调用时, 会创建一个执行上下文，这个执行上下文会包含函数在哪里被调用(调用栈)、函数的调用方法、传入的信息
this就是记录的其中一个属性，会在函数执行的过程中用到

this实际上是在函数被调用时发生的绑定，它指向什么完全取决于函数在哪里被调用

## 1. 默认绑定
- 函数独立调用
```javascript
function foo() {
  console.log(this.a)
}

var a = 2
foo() 
```
如果使用严格模式(`use strict`),那么全局对象将无法使用默认绑定，因此this会绑定到`undefined`

## 2.隐式绑定
调用位置是否有上下文对象
```javascript
function foo() {
  console.log(this.a)
}
var obj2 = { a: 42, foo: foo }
var obj1 = { a: 2, obj2: obj2}
obj1.obj2.foo()
```
- this丢失
```javascript
function foo() {
  console.log(this.a)
}

var obj = {
    a:2,
    foo: foo
}

var a = 'global'

setTimeout(obj.foo, 100)
```
JavaScript环境中内置的setTimeOut()函数和下面的伪代码类似:
```javascript
function setTimeOut(fn, delay) {
  // 等待delay毫秒
    fn(); // <--调用位置
}
```

## 3. 显式绑定
通过调用函数的`call(...)` 和`apply(...)`方法
这两个方法是如何工作的呢？
他们的第一个参数是一个对象，它们会把这个对象绑定到this,接着再调用函数的时候指定这个this，因为你可以直接指定this的绑定对象，因此我们称为显式绑定
```javascript
function foo() { console.log(a) }

var obj = { a: 2 }

var bar = function() { foo.call(obj) }

bar()

setTimeOut(bar, 100) // 2
// 硬绑定的bar,不能修改它的this
bar.call(window)

```
强制把foo的this绑定到了obj,无论之后如何调用函数bar,他总会手动在obj上调用foo,这种绑定是一种显示的强制绑定，因为我们称之为硬绑定

硬绑定的应用场景就是创建一个包裹函数，传入所有的函数并返回接收到的所有值
```javascript

```
