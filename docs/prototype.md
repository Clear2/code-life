---
id: prototype
title: 面向对象与原型

---

### 创建对象的两种方式
- new 
- 字面量

``` javascript
function Fn() {

}

let f1 = new Fn() // Fn用new执行，
let f2 = new Fn()
```


### 原型与原型链模式
- 每一个函数数据类型都有一个自带的属性: `prototype`, 这个属性值是一个对象(用来存储公用的属性和方法的)
 1. 普通的函数
 3. 类 (自定义类和内置类)
 
- 在`prototype`这个对象中，有一个自带的属性`construct`, 这个属性存储的是当前函数本身

- 每一个对象类型的数据类型的值，有一个自带的属性 `__proto__`, 这个属性指向所属类的原型 `prototype`
1. 普通对象 
2. 数组、正则、Math、日期、类数组等等
3. 实例也是对象类型的值
4. 函数的原型 prototype属性的值也是对象类型的
5. 函数也是对象类型的值 

```javascript
Fn.prototype.constructor === Fn
``` 
