class user{
    constructor(username , email){
this.email = email
this.username = username

}

get username(){
    this._username.toUpperCase()
}

set username(value){
this._username = value.toUpperCase()
}
}


const aman = new user("Aman","aman@123")


console.log(aman._username)