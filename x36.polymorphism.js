class Animal{

    sound(){
        console.log('Animals make different sounds')
    }
}

class Dog{

    sound(){
        console.log('Dog barks')
    }
}

class Cat{

    sound(){
        console.log('Cat mews')
    }
}

let Animal1= new Animal()
let Dog1 = new Dog()
let Cat1 = new Cat()

Animal1.sound()
Dog1.sound()
Cat1.sound()
