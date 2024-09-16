//producing promise

let myPromise = new Promise(function(resolve, reject){
    const a = 4
    const b = 5

    setTimeout(function(){
        if(a===b){
            resolve('equal')
        }
        else{
            reject('unequal')
        }
    })
}, 2000)
//pending state
console.log(myPromise)

//fulfilled state
myPromise.then(function(result){
    console.log(result)
})

//reject state
myPromise.catch(function(failedresult){
    console.log(failedresult)

})