const promiseOne = new Promise(function (_resolve,_reject){

    //do an async task
    //db calls,cryptography

    setTimeout(function(){
console.log("hello higigshv")
_resolve()

    },1000)

})
    promiseOne.then(function(){

        console.log("promise completed")
    })


    new Promise(function(_resolve,_reject){
     setTimeout(function(){

        console.log("helooo jii")
        _resolve()
     },1000)


    }).then(function(){
        console.log("wokeddd 2 promise")
    })
