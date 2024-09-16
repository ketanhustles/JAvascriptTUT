let firstPerson = {
    name : 'Ketan',
    age: 23,
}

let secondPerson = JSON.parse(JSON.stringify(firstPerson))  //deep copy
//total immutability is maintained