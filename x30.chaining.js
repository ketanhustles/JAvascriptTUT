let arr = [
    {name : "A" , age: 14, gender: "M"},
    {name : "B" , age: 15, gender: "M"},
    {name : "C" , age: 16, gender: "M"},
    {name : "D" , age: 17, gender: "F"},
    {name : "E" , age: 18, gender: "F"},
    {name : "F" , age: 19, gender: "F"},
    {name : "E" , age: 20, gender: "M"},
    {name : "F" , age: 14, gender: "M"}
]

let males = arr.filter(function(obj){
    return obj.gender == 'M'
})

console.log(males)

let ageOfMales = males.map(function(male){
    return male.age
})

console.log(ageOfMales)

//chaining can be done as--

let males1 = arr.filter(function(obj){
    return obj.gender == 'M'
}).map(function(male){
    return male.age
})

console.log(males1)

