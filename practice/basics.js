
//----------------------------Reverse a String:-------------------------



function reverseStrng(str){

    return str.split('').reverse().join('')
}


console.log(reverseStrng("Amandeep"))



//-----------------------Find the Largest Number in an Array:---------------


// function largestArray(arr){
//    return Math.max(...arr)

// }

// console.log(largestArray([2,45,67,87,33,56]))


//-------------------------------2nd way------------------------


function largestArray(arr){
    let largestNum = arr[0]
    for(let i =1;i<arr.length;i++){
      if(arr[i]>largestNum){
        largestNum = arr[i]
    
    }   
    
}
return largestNum;
    
}
const arr1 = [23,45,566,565]
const result = largestArray(arr1)

console.log("largest value is " + result)