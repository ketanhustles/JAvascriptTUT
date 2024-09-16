function Person(_name, _age){
    var name = _name //var prevents value from getting exposed outside the class
    this.age = _age

    this.getName = function(){
        return name
    }
}

let Person1 = new Person('adam', 25)
console.log(Person1)
console.log(Person1.getName())