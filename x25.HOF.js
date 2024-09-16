//map

const num = [1,2,3,4,5]

//map will loop through every element of array and 
//perform specific operation
// Map always returns a new array with results

const squaredNum = num.map(function(n){
        return n*n

})

console.log(squaredNum)

const transactions = [1000,3000,4000,2000, -898, 3800, -4500]

const inrtodollar = 80

let transactionINdollar = transactions.map((amount)=>{
        return amount/inrtodollar

})

console.log(transactionINdollar)

//using forEach- it never returns anything, if tried returns "undefined"

let transactionINdollar1 = transactions.forEach((amount)=>{  
        console.log(amount/inrtodollar)

})
