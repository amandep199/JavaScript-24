
let a = 300;


if(true){
    let a = 10
    const b = 20
    
    // console.log("inner scope:", a)


}
//  console.log(a)
// console.log(b)
// console.log(c)




function one(){

const username = "Aman";


function two(){


    const website = "youtube"

    console.log(username)
}

// console.log(website)

// two()
}

one()


if(true){

    const name = "Annaa"

    if(name==="Annaa"){

        const website= "youtube"

        // console.log(name + website)


    }
    // console.log(website)


    // console.log(name)

}



//+++++++++++++++++++++++++++++++++++++knowledge++++++++++++++++++++++++++++++

console.log(addOne(3))

function addOne(num){

return num +1

}


console.log(addTwo(5))

const addTwo = function(num){

return num +2

}
