//The destructuing assignment syntax is a javascript expression that
//makes it possible to unpack values from arrays, or properties from
//objects, into distinct variables.

//Destructuring an array

let arr = ['hi', 'I', 'am', 'Ketan']

let [a, b, c, d, e] = arr  //values from array assigned to variables respectively
// e is an empty variable that stores "undefined"

console.log(b) //returns 'I'
console.log(e) //returns undefined

//Destructuring an object

let myObj = {
    name : 'Ketan',
    age : '21',
    gender : 'M',

    address : {
        city: 'Gajiyabad',
        country : 'Bharat'

    }
}

let {name : n, age, gender, address} = myObj  //same keynames have to be passed in object destructuring.

console.log(age) // returns 21
//to give an alternate name, name:n syntax can be used

console.log(n)

//to console nested object
console.log(address)
