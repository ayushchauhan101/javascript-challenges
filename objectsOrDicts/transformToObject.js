const nums = [1,2,3]

function transformToObjects(numberArray) {
    return numberArray.map((x) => {
        return {val: x}
    })
}
console.log(transformToObjects(nums))


// // using maps to convert array to objects or dict
// nums.map((x) => console.log(x+10))
// nums.map((x) => console.log([x+10]))

// // create a new array
// function convertToArray(arr){
//     return arr.map((x) => {
//         return [`The square of each element is: ${x**2}`]
//     })
// }

// console.log(convertToArray(nums))
