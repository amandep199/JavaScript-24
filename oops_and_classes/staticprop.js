class User{
    constructor(username){
    this.username = username
    
    }
    logMe(){
        console.log(`username loged in as ${this.username}`)
    }
    createId(){
        return `123`
    }

    }



    const hitesh = new User("aman")

    console.log(hitesh.createId())