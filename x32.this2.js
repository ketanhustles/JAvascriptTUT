'use strict'

console.log(this) //returns empty object

function myfn(){ //returns undefined
    console.log(this)

}
myfn()

let obj = { //object itself
    name: "Ketan" ,
    myfn : function(){
        console.log(this)
    }
}

obj.myfn()

let obj2 = { //returns undefined 
    name: "Ketan" ,
    myfn : function(){
        function myfn2(){
            console.log(this)
        }
        myfn2()
    }
}

obj2.myfn()