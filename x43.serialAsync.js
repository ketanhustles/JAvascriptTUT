const fs = require('fs')

let data1 = fs.readFileSync('x41.f1.txt')


let data2 = fs.readFileSync('x42.f2.txt')


fs.readFile('x41.f1.txt' , cb1)

function cb1(err , data){
    if(err){
        console.log(err)
    }
    console.log('File 1 data ->' + data1)
    fs.readFile('x42.f2.txt' , cb2)

}


function cb2(err, data){
    if(err){
        console.log(err)
    }
    console.log('File 2 data ->' + data2)
}
