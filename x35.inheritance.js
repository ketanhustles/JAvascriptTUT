class Person{
    constructor(_name, _age){
        this.name = _name
        this.age = _age
    }

    welcome(){
        console.log('Welcome ${this.name}')
    }
}

class Teacher extends Person{
    constructor(_name, _age, _strength){
        super(_name, _age)
        this.strength = _strength
    }

    test(){
        super.welcome() //inheriting a method
    }
}

class Student extends Person{
    
}

let Teacher1 = new Teacher('Mark', 40, 75)
console.log(Teacher1)

Teacher1.test()