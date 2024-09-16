//find - returns first element of array that satisfies condition

const transactions = [1000,3000,4000,2000, -898, 3800, -4500]

let firstWithdrawl = transactions.find(function(n){
    return n<0
})

console.log(firstWithdrawl)

//findIndex - returns index first element of array that satisfies condition

let firstWithdrawlIndex = transactions.findIndex(function(n){
    return n<0
})

console.log(firstWithdrawlIndex)