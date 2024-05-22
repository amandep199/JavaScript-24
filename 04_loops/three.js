
const arr =[1,2,3,4,5]

for (const value of arr) {
    
    // console.log(`value is ${value}`)
}


const greetings = "amann"
for (const greet of greetings) {

    // console.log(`Each char is ${greet}`)
    
}



//+++++++++++++++++++++++Maps_+++++++++++++


const map = new Map()


map.set('IN',"India")
map.set('UK',"United Kingdom")

// console.log(map)


for (const [value,amount] of map) {
    // console.log(value, "------",amount)
}


//+++++++++++++++++++++++++++for OF not work on objects
const myObj = {

    'game1':"Gta 5",
    'game2':"Cod"
}

for (const games of myObj) {
    // console.log(`games are ${games}`)
}