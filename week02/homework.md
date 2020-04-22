## 1. 写一个正则表达式 匹配所有 Number 直接量

```javascript
var numReg = /[+-]?\d+(\.\d*)?|[+-]?\.\d+/
```



##2. 写一个 UTF-8 Encoding 的函数

```javascript
function utf8Encoding(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    result += '\\u' + str.charCodeAt(i).toString(16);
  }
  return result;
}
```

##3. 写一个正则表达式，匹配所有的字符串直接量，单引号和双引号

```javascript
var stringReg = /^[\u4e00-\u9fa5A-Za-z0-9]+$|(?:[^"]|\.)*"|'(?:[^']|\.)*/
```

