//loop for iterating over iterable objects

var s =[60,90,80,75]

for(var x of s){
    console.log(x)
}

//method- entries()

var colors= ['red', 'blue', 'green']

for(var[index,color] of colors.entries()){
    console.log(index + '--' + color)
}

//strings
var str= 'Ketan'

for(var c of str){
    console.log(c)
}