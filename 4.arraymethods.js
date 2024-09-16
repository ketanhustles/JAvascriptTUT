var arr = [1, 'ketan', true, 21.3]

//pop method - deletes last value

arr.pop()
console.log(arr)

//push - inserts at last pos

arr.push('pushed')
console.log(arr)

//shift - deletes from start

var c = arr.shift() //catches the deleted value
console.log(c)

console.log(arr)

//unshft - inserts at start
arr.unshift(103)
console.log(arr)