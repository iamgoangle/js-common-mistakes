In order to prevent common mistakes in JavaScript while coding, I am going to re-learn about common mistakes in basic JavaScript that probably forget or not aware.

# JS Hosting

พฤติกรรมพื้นฐานของ ภาษา JS ที่ เคลื่อนย้าย declaration ไปสู่ข้างบนเองโดยอัตโนมัติ

## JS declarations are Hoisted

```
x = 3;
y = 4;
z = 5;
```

## JS initialize is NOT Hoisted
```
var x = 5
```

## Example Hoisted
```
console.log(x);
x = 3;

ผลลัพธ์เลข 3 แสดงออกหน้าจอ ซึ่งอย่างที่บอกได้
Hoisted always do when it found that declarations

ซึ่งมันเทียบเท่า
var x = 3;
console.log(x);
```
## Example Undefined
```
console.oog(x);
var x = 10;

แสดง Undefined ออกหน้าจอ เพราะว่า var x;
เป็น declaration มันจึงย้ายตัวเองไปอยู่ข้างบน console.log();
```

## function() {} ก็เป็น Hoisting
```
console.log(test());

function test(){
	console.log('golf test')
}

แสดง golf test ออกทางหน้าจอ
```

## ใช้ Anonymous function หรือ variable expression function เพื่อป้องกัน Hoisting
```
console.log(test);
var test = function () {
	console.log('test golf');
}

แสดง Undefined ออกทางหน้าจอ
```

## อย่าลืมเรื่อง Scope
```
function numbers () {
  var num1 = 2,
      num2 = 3;
  return num1 + num2;
}

console.log(num1); // ReferenceError num1 is not defined.

var num1; ไม่ hoisting เพราะถูก function context ครอบเอาไว้
```
