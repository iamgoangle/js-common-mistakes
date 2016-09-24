// variable declaration hoisting
console.log(x);
x = 3;

// function hoisting
console.log(test());
function test(){
	console.log('golf test')
}
