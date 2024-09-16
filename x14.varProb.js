//Problem 1.....................................

var a = 21

var a = 35  // redeclaration updates the value of variable in JS, rather than error

console.log(a)

//Problem 2.....................................

if(a===35){
    var b = 40
    console.log(b)
}

console.log(b) //variable inside a block is allowed to be accessed from outside
//variables declared with var keyword are not block scoped, they are function scoped.

function test(){
    var c = 10
    console.log(c)
}
console.log(c)   //this produces error i.e. function scoping

