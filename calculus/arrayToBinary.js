// Given an array of ones and zeroes, convert the equivalent binary value to an integer.

let arr = [0,1,0,1]

// method 1
// const binaryArrayToNumber = arr => {
//     return parseInt(arr.join(''),2)
// };

// // method 2
// function binaryArrayToNumber(arr){
//     return parseInt(arr.join(''),2)
// }

// method 3
binaryArrayToNumber = arr =>{
    return parseInt(arr.join(''),2)
}

console.log(binaryArrayToNumber(arr))