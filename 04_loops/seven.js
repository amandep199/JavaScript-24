const myNumbers =[1,2,3,4,5,6,7,8,9]


// const news = myNumbers.map((num)=>{ return num +1})


const news = myNumbers
.map((num)=>num*2)
.map((num)=>num+1)
.filter((num)=>num>11)
console.log(news)