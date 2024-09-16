//solution to redeclaration problem..........

let a = 5

//  let a = 9 //this redeclaration produces error unlike in var.

//solution to scoping problem.................

if(true){
    let b = 2
    console.log(b)
}
console.log(b) //produces error as let is block scoped

//reassigning is allowed with let
let c=8
c = 9 //this is reassigning
