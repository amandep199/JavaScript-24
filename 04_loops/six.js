// const coding = ["java", "python","c++","css","html"]


// const values = coding.forEach( (items)=>{

//     console.log(items)
// })

// console.log(values)


//filter is easy way

const myNums=[1,2,3,4,5,6,7,8,9,10]


// const newNum = myNums.filter((num)=>{
// return    num>=4

// })

// console.log(newNum)


//+++++++++++++++++++++++++++++++2nd wayy
const newNums =[]
myNums.forEach( (num)=>{
    if (num>4) {
        
newNums.push(num)
    }
})

// console.log(newNums)



const books =[{title:"book1",genre:"history",publish:"2001",edition:"2021"},
{title:"book2",genre:"sci-fi",publish:"2003",edition:"2020"},
{title:"book3",genre:"action",publish:"2004",edition:"2022"},
{title:"book4",genre:"drama",publish:"2005",edition:"2023"}]



let myBook = books.filter( (bk)=>{ return bk.publish >=2000 && bk.genre==='history'})

console.log(myBook)