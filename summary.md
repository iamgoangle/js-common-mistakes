## Declaration is Hoisting
```javascript
console.log(x);		// undefined
var x = 5;
```

เพราะ var x; จะยกตัวเองไปอยู่ข้างบนสุด

## Function is Hoisting
```javascript
console.log(test());	// golf
function test () {
	return 'golf';
}
```

เพราะ function จะแยกตัวเองไปอยู่ข้างบนเสมอ

## Function expression is not Hoisting
```javascript
console.log(test());
var test = function () {
	return 'golf';
}
```

### Result
```
Uncaught TypeError: test is not a function(…)
```

## Shadow
```javascript
var x = 'global';
function test () {
	var x = 'local';
	console.log(x);
}

test();	// local
console.log(x);	// global
```

เพราะ var x; คือ function scope การประกาศ var จะเป็นการกำหนด function scope โดยปริยาย

## ES5 ไม่มี block scope จะมีแค่ function scope (variables are function-scoped)
```javascript
function test () {
	var x = 123456;
}

console.log(x);	// Uncaught ReferenceError: x is not defined(…)
```

## พระเอกมาแล้ว IIFE (immediately-invoked function expression)
```javascript
function test () {
	if (true) {
		var x 555;
	}
	
	console.log(x);	// 555
}
```

เพราะ ES5 ไม่มี block scoped ดังนั้น การแสดง x นอก ปีกกา {} ได้อย่างถูกต้องจึงไม่ใช่เรื่องแปลก

```javascript
function test () {
	if (true) {
		(function (){
			var x = 555;
			console.log(x);		//	555
		}());
	}
	
	console.log(x);		// Uncaught ReferenceError: x is not defined(…)
}

test();
```
