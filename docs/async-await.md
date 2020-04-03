---
id: await
title: async/await
sidebar_label: async/await
---
### async的使用
```javascript
const x = {
  getEnv(fn) {
    fn(5)
  }
}

async function asyncFn() {
  return new Promise(resolve => {
    x.getEnv((res) =>{
      resolve(res)
    })
  })
}

async function asyncCall() {
  const res = await asyncFn()
  console.log('res->', e)
}

asyncCall()
```


### async/await example
1. 准备一个例子
```javascript
const fruitBasket = {
    apple: 27,
    grape: 0,
    pear: 14
}
```
2. 模拟异步获取该对象数据
```javascript
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const getNumFruit = (fruit, ms)  => sleep(ms).then(_ => fruitBasket[fruit])

console.log('------>start')
getNumFruit('apple', 1000).then(num => console.log(num))
console.log('------>end')

```

3. 使用await
```javascript
const control = async _ => {
    console.log('start')
    
    const numApples = await getNumFruit('apple', 1500)
    console.log('apple--->', numApples)
    
    const numGrapes = await getNumFruit('grape', 1000)
    console.log('grape--->', numGrapes)
    
    const numPears = await getNumFruit('pear', 500)
    console.log('pear --->', numPears)

    console.log('end')
}
control()

// 验证两个函数,时间短的会不会先返回
const longSleep = async (ms) => {
    console.log('long-->start')
    const numApples = await getNumFruit('apple', ms)
    console.log('long--->', numApples)
}

const shortSleep = async (ms) => {
    console.log('short-->start')
    const numApples = await getNumFruit('apple', ms)
    console.log('short--->', numApples)
}
longSleep(2500)
shortSleep(2000)

```

### await in a for loop
```javascript
const fruitsToGet = ['apple', 'grape', 'pear']

const forLoop = async () => {
    console.log('start')
    for (let i = 0; i < fruitsToGet.length; i++) {
        const numFruit = await getNumFruit(fruitsToGet[i])
        console.log(numFruit)
    }
    console.log('End')   
}
forLoop()
```

### ForEach loop
```javascript

const forEachLoop = _ => {
    console.log('start')
    fruitsToGet.forEach(async fruit => {
      const numFruit = await getNumFruit(fruit, 1000)
      console.log(fruit, '-->', numFruit)
    })
    console.log('End')
}
```
JavaScript does this because `forEach` is not promise-aware

### map Loop
```javascript

const mapLoop = async _ => {
    console.log('start')
    const promise =fruitsToGet.map(async fruit => {
      const numFruit = await getNumFruit(fruit, 1000)
      return numFruit  
    })
    const numFruits = await Promise.all(promise)
    console.log(numFruits)
    console.log('End')
}
```
`map` 总是返回`Promise` (如果使用`await`), 必须等待数组里的所有`Promise`到`resolved`状态


### 参考链接
[JavaScript async and await in loops](https://zellwk.com/blog/async-await-in-loops/)
