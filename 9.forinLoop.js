//used to loop through the properties of an obbject

var colors ={
    pri : 'blue',
    sec : 'white',
    tert : 'red'
}

for( var c in colors){
    console.log(colors[c])
}

//for arrays
var arr=['white','red', 'blue']
for(var d in arr){
    console.log(arr[d])
}