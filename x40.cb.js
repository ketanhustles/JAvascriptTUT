const fs = require('fs')  //imports file system module

console.log('first line')

//synchronus method- only one thread at a time
let data1 = fs.readFileSync('x41.f1.txt')
console.log('file1 =>' + data1)

let data2 = fs.readFileSync('x42.f2.txt')
console.log('file2 =>' + data2)


console.log('last line')

//asynchronus method- multiple threads executed simultaneously
fs.readFile('x41.f1.txt' , cb1)

function cb1(err , data){
    if(err){
        console.log(err)
    }
    console.log('File 1 data ->' + data1)
}

fs.readFile('x42.f2.txt' , cb2)

function cb2(err, data){
    if(err){
        console.log(err)
    }
    console.log('File 2 data ->' + data2)
}
