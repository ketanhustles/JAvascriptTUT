// reduce method - 
//always returns a single value

let num = [1,2,3,4,10]

let result = num.reduce(function(acc, value){
    //acc = initial value
    let updatedSum = acc+value
    return updatedSum

}, 0)

console.log(result)

let product = num.reduce(function(acc, value){
    //acc = initial value
    let updatedSum = acc*value
    return updatedSum

}, 1)

console.log(product)
