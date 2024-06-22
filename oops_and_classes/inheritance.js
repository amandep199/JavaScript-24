class User{
constructor(username){
this.username = username

}
logMe(){
    console.log(`username loged in ${this.username}`)
}

}

class Teacher extends User {
    constructor(username,email,password){
         super(username)   
        this.email = email
        this.password = password
        }

        addCourse(){
            console.log(`a new course is added by ${this.username}`)
        }
}

const chai = new Teacher("aman","aman@123","123")

chai.addCourse()


