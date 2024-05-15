// console.log("A")
// console.log("M")
// console.log("A")
// console.log("N")


function sayMyname(){

    console.log("A")
console.log("M")
console.log("A")
console.log("N")


}


// sayMyname()


// function addTwonumbers(number1,number2){

//     console.log(number1+number2)



// }


function addTwonumbers(number1,number2){

    // console.log(number1+number2)

    let result = number1 + number2

    return result


}
const result = addTwonumbers(2,4)

// console.log("Result is: ", result)



function loginuser(username="sam"){


    return `${username} just logged in `





}


// console.log(loginuser())



function calculateCartprice(...num1){

    return num1

}

// console.log(calculateCartprice(200,323,2345))




const user = {

name :"aman",
price: 199 
}



function handleObject(anyobject){

console.log(`username is ${anyobject.name} and price is ${anyobject.price}`)


}

handleObject({

name:"amann",
price:121

})


let newarray = [200,300,400]


function fromArray(myArray){


    return myArray[2]

}


console.log(fromArray([200,300,500]))