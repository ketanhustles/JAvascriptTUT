function createcar(_name, _company, _color){
    this.name=_name
    this.company = _company
    this.color = _color

    this.drive = function(){
        console.log('I am driving ${this.name} and it is of ${this.color} color')
    }
    
}

let car1 = new createcar('x4', 'BMW', 'Black')
let car2 = new createcar('s-class', 'BMW', 'white')

car1.drive()