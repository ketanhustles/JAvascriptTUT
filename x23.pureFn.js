//Pure function- for a given input always returns the same output

//Impure function
var a = 4  //if this value is changed
function add(x){  //the value that function returns changes for same arguement 
    console.log(x+a)
    a++
}

add(2)

//Pure function
function addPure(x, a){
    console.log(x+a)
}

addPure(2,3) //always gives same output for same input

// "console.log" uses an external resource
//use "return" instead to write pure functions