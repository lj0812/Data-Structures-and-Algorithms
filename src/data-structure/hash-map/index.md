# 散列表

## 定义

散列表以[键, 值]的形式存储数据

## 散列函数

``` js
function obj2HashCode(key) {
  const hash = 5381 // 一个较大的质数

  for (let i = 0; i < key.length; i++) {
    hash = hash * 33 + key.charCodeAt(i) // 33作为魔力数
  }

  return hash % 1013 // 较大的随机质数
}
```
