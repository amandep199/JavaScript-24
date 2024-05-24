const myNums = [1,2,3]

// const myTotal = myNums.reduce(function (acc,currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc+currval   
// },2)

const myTotal = myNums.reduce((acc,curr)=>acc+curr     ,0)
// console.log(myTotal)




const shoppingCart =[
{
    courseName:"js ",
    coursePrice:1299
},
{
    courseName:"web D ",
    coursePrice:1399
}


]

const myItems = shoppingCart.reduce((acc,items)=> acc + items.coursePrice   ,0)


console.log(myItems)