
let person1 = {
    name : 'Ketan',
    age : 21,

    printDetails : function(){
        console.log('Hi i am $(this.name) ' )
    }
}

let callExample = function(){
    console.log('executed ')
}

let person2 = {
    name : 'Ketan',
    age : 21,

    
}


person1.printDetails()

//call
person1.printDetails.call(person2)
callExample.call(person1)

//Bind
let myfunc = callExample.call(person1)
console.log(myfunc)



