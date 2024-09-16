function hello(){
    console.log("hello")
}

let timer = setInterval(hello, 2000) //executed repeated after every 2 seconds

setTimeout(function(){ //used to terminate setInterval, here after 3 sec
    clearInterval(timer)
}, 3000)

