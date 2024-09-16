let test1 = ()=>{   // "()=>" in place of "function()"
    console.log(1)
}

let test2 = (a,b)=>{
    console.log(a+b)
}

test1()
test2(4,5)

//for a single line function
let test3 = ()=> console.log(2)  //this is also allowed
test3()