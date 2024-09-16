//non strict mode in node

const { KeyDerivationError } = require("web3")

console.log(this) //returns empty object

function displaythis(){ // returns global object
    console.log(this)
}

displaythis()

let obj = { //object itself
    name: "Ketan" ,
    myfn : function(){
        console.log(this)
    }
}

obj.myfn()

let obj2 = { //returns global object 
    name: "Ketan" ,
    myfn : function(){
        function myfn2(){
            console.log(this)
        }
        myfn2()
    }
}

obj2.myfn()





