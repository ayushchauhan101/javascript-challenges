let nums = [3,5,7,2,6,7,1,5,8,3,9,10,4,2,6]

// METHOD 1
let counter = 0
for(let i = 0; i<=nums.length-1; i++){
    if(nums[i]>counter){
        counter = nums[i]
    }
}
console.log(counter)

// METHOD 2
// let max = 0
// for(let i of nums){
//     if(i > max){
//         max = i
//     }
// }
// console.log(max)

// METHOD 3
// console.log(Math.max(...nums))

