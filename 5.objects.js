// key value pairs



var per = {
    name : 'ketan',
    age : 20,
    hasGF : true,
    friends: ['Mukul', 'Prakhar', 'Vaibhav'],
    address : {
        state : 'UP',
        jila : 'Gajiyabaad'
    },
    isBatman : true
}
console.log(per)
   
//accessing elements

//dot notation
console.log(per.age)  
console.log(per.friends[1])  
console.log(per.address.jila)
 
//updating values
per.isBatman = false
console.log(per)

//adding keys
per.socials = ['insta', 'snap', 'linkedin']
console.log(per)