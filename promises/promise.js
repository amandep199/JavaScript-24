// const promiseOne = new Promise(function (_resolve,_reject){

//     //do an async task
//     //db calls,cryptography

//     setTimeout(function(){
// console.log("hello higigshv")
// _resolve()

//     },1000)

// })
//     promiseOne.then(function(){

//         console.log("promise completed")
//     })


//     new Promise(function(_resolve,_reject){
//      setTimeout(function(){

//         console.log("helooo jii")
//         _resolve()
//      },1000)


//     }).then(function(){
//         console.log("wokeddd 2 promise")
//     })


//     const promiseThree = new Promise(function(_resolve,_reject){

//         setTimeout(function(){

//             console.log("3rd promise")
//             _resolve({username :"chai",age: 21})
//         },2000)
//     })

// promiseThree.then(function(user){
//     console.log(user)
// })


const promiseFour = new Promise(function(_resolve,_reject){

setTimeout(function(){
    let error = false;
if(!error){
    _resolve({username:"aman",age:21})

}else{
    _reject('error something went wrong')
}


},1000)

})

promiseFour.then((user)=>{
     console.log(user)

     return user.username
}).then((username)=>{
    console.log(username)
}).catch((error)=>{

console.log(error)
}).finally(function(){
    console.log("finalyy resolve or rejected")
})


const promiseFive = new Promise(function(_resolve,_reject){
    setTimeout(function(){
        let error = true;
    if(!error){
        _resolve({username:"aman",age:"21"})
    
    }else{
        _reject('error JS went wrong')
    }
    
    
    },1000)

})


async function consumePromiseFive(){
 try { const response = await promiseFive
    console.log(response) 
} catch(error){

    console.log(error) 
}
}

consumePromiseFive()

// async function getAllusers(){
//     const response = await fetch('https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object')

// }

fetch('https://randomuser.me/api/')
.then((response)=>{
    return response.json()
})
.then((data)=>{
console.log(data)
}).catch((error)=>{
    console.log(`error occur${error}`)
})