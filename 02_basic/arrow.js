const  user = {

username : "aman",
price : 400,


welcomeMessage:function() {

console.log(  `${this.username} , welcom to website  `)

// console.log(this)

}
}

// user.welcomeMessage()

// user.username="mklkl"

// user.welcomeMessage()


// console.log(this)     /// empty object



// +++++++++++++++++++++++this in function not work++++++++++++++++++++++++++
//  function chai(){
//      let username = "amannn"
//     console.log(this.username)
// }

// chai()




const  chai= () => {
          let usernamee = "amannn"
     console.log(this.usernamee)
    
    
    }


    ///implicit return

    // const addTWo= (num1,num2)=>  num1 + num2


    // const addTWo= (num1,num2)=>  (num1 + num2)


    const addTWo= (num1,num2)=> ( {username :"aman"})

    


    console.log(addTWo(3,2))



    const myArray = [2,3,5,6]

    myArray.forEach()