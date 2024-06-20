// let myName = "Aman"

// console.log(myName.length)

let myhero= ["Thor","CaptAmerica"]

let heroPower = {
Thor:"hammer",
CaptAmerica:"Shield",

getThorPower:function(){
    console.log(`thor power is ${this.Thor}`)
}


}

Object.prototype.aman = function(){

    console.log(`aman is present in all objects`)
}


myhero.aman()