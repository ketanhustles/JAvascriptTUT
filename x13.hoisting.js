
//Hoisting

console.log(a)   //returns 'undefined' as output

greet() //does not give error, allowed in js

add(2,3) //now this gives an error as it is not a function now

var a=6

function greet(){
    console.log("hello")
}

var add = function(a,b){
    console.log(a+b)
}