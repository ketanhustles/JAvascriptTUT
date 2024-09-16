//functions that are passed as an arguement to other functions

function printFirstName(firstname, cb){
    console.log(firstname)
    cb('Rogers')  //calling the callback function
}



//printLastName is a callback function
function printLastName(lastname){
    console.log(lastname)
}

printFirstName('Steve', printLastName)