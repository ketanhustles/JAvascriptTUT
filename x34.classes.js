class Person{
    constructor(_name, _age){
        this.name = _name
        this.age = _age
    }

    welcome(){
        console.log('welcome ${this.name}')
    }
}

let Person1 = new Person('Adam', 19 )
Person1.welcome()

console.log(Person1)