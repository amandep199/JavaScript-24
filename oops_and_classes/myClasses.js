// class user{
//     constructor(username,email,password){
//         this.email= email
//         this.password= password
//         this.username = username
    
        
//     }
//     encryptPassword(){
// return `${this.password}abc`
// }

// }

// const chai = new user("Aman","aman@123","abcc")

// console.log(chai.encryptPassword())



function user(username,email,password){
    this.email= email
    this.password= password
    this.username = username
}


user.prototype.encryptPassword= function(){

    return `${this.password}`
}


const tea = new user("kjfhvk","iergiu","89rfh")

console.log(tea.encryptPassword())