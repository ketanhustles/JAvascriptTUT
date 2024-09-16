/// spread operator { ... }

let firstPerson = {
    name : 'Ketan',
    age: 23,
}

let secondPerson = {...firstPerson} //prevents refrence value from being changed
//here only one level of immutability is maintained and fails in case of nested objects
