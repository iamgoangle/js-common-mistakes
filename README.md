In order to prevent common mistakes in JavaScript while coding, I am going to re-learn about common mistakes in basic JavaScript that probably forget or not aware.

# Table of index
1. [JS Hosting](https://github.com/iamgoangle/js-common-mistakes#js-hosting)
2. [JS Closure](https://github.com/iamgoangle/js-common-mistakes#js-closure)
3. [Summary](https://github.com/iamgoangle/js-common-mistakes/blob/master/summary.md)

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
```javascript
console.log(x);
x = 3;

ผลลัพธ์เลข 3 แสดงออกหน้าจอ ซึ่งอย่างที่บอกได้
Hoisted always do when it found that declarations

ซึ่งมันเทียบเท่า
var x = 3;
console.log(x);
```
## Example Undefined
```javascript
console.oog(x);
var x = 10;

แสดง Undefined ออกหน้าจอ เพราะว่า var x;
เป็น declaration มันจึงย้ายตัวเองไปอยู่ข้างบน console.log();
```

## function() {} ก็เป็น Hoisting
```javascript
console.log(test());

function test(){
	console.log('golf test')
}

แสดง golf test ออกทางหน้าจอ
```

## ใช้ Anonymous function หรือ variable expression function เพื่อป้องกัน Hoisting
```javascript
console.log(test);
var test = function () {
	console.log('test golf');
}

แสดง Undefined ออกทางหน้าจอ
```

## อย่าลืมเรื่อง Scope
```javascript
function numbers () {
  var num1 = 2,
      num2 = 3;
  return num1 + num2;
}

console.log(num1); // ReferenceError num1 is not defined.

var num1; ไม่ hoisting เพราะถูก function context ครอบเอาไว้
```

---

# JS Closure

จุดเริ่มต้น มาจาก JS ยินยอมให้เราทำสิ่งนี้
## Lexical scoping
เรามีสอง function A () และ function B () โดยที่

```javascript
function A () {
	var x = 5;

	function B () {
		console.log(x);
	}

	console.log(B());
}

A();

ผลลัพธ์ แสดง 5 ออกทางหน้าจอ
```

นั่น คือ Nested function หรือ Inner and Outer function

fuunction B() ไม่มี local variable ใดๆเลย แต่มันสามารถเข้าถึง var x; ในฐานของตัวแปร global ได้

## Closure
เป็นออพเจคพิเศษที่จะยังคงไว้ซึ่ง สถานะ หรือ context ของ function เดิม เมื่อตอน Closure มันถูกสร้าง

```javascript
function print () {
	var me = this;
	this.name = "Teerapong Singthong";
	this.getName  = function () {
		console.log(this.name)
	}

	return me;
}

var closureMe = print();
closureMe.getName();
```
var closureMe เป็น Closure แล้ว เพราะ มันเป็น Outer
ที่คลุม Inner function หรือ parent-nested function

ตอนนี้ this.name = "Teerapong Singthong"
ควรจะ destroy ไปแล้ว เพราะ print(); ถูกเรียกไปแล้ว ทำงานไปแล้ว

closureMe.getName() ยังสามารถ แสดง Teerapong Singthong
ยังแสดงออกทางหน้าจอได้ เนื่องจาก closure เมื่อถูกสร้าง
มันจะยังคงสถานะเอาไว้ แม้มันจะถูกทำลายไปแล้ว

# ตัวอย่างง่ายๆ
```javascript
function print(lastName) {
  return function(firstName) {
    console.log(`${firstName} ${lastName}`)
  }
}

var printClosure = print("Singthong");
printClosure("Teerapong")

// แสดง Teerapong Singthong ออกทางหน้าจอ
```
var printClosure = print("Singthong"); สร้าง closure
ทันทีที่สร้าง มันจะเก็บ context lastname "Singthong" เอาไว้ และทำลายตัวเอง
เพราะมันจบ Scope ของ Outer แล้ว

printClosure("Teerapong") เรียกฟังก์ชั่น ที่เป็นผลมาจาก ฟังก์ชั่นของการห่อหุ้มมัน
