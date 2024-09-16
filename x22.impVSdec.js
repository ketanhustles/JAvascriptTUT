// check square even or not

//Imperative way
const a = 5

let isEven;

if(a*a %2==0){
    isEven = true
}
else{
    isEven = false
}
console.log(isEven)

//declarative way

const checkSquare = (x)=>(x*x % 2===0 ? true : false)


console.log(checkSquare(4))