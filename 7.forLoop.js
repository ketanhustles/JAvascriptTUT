//for loop

for(var i=0; i<10; i++){
    console.log('hello')
}

//square each element in an array

var num= [2,3,4,5,6,7]
var squaredArr= []

for(var i=0; i<num.length; i++){
    squaredArr.push(num[i]*num[i])

}

console.log(squaredArr)