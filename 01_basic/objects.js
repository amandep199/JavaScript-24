//Singleton       by Constructor only


//object literals


const mySym= Symbol("key 1")

const jsUser = {

[mySym]: "key 1",
    name:"Aman",
    age:21,
    id:2221,
    location:"hisar",
}


jsUser.age=23

jsUser.greetings = function(){


    console.log(" Ram Ram")
}

jsUser.greetings2 = function(){


    console.log(`Ram Ram jsUser, ${this.name}`)
}

// console.log(jsUser.age)
// console.log(jsUser["name"])
// console.log(jsUser[mySym])
console.log(jsUser.greetings())
console.log(jsUser.greetings2())