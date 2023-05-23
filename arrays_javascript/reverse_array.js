// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// METHOD 1
function digitize(n) {
    if(n.length === 0 || n < 0){
        return 'not valid input'
    }else{
        // convert an integer to an array Number returns any integer
        let nums = Array.from(String(n),Number)
        
        let newArr = []
        for(let i = nums.length -1;i>=0 ;i--){
            newArr.push(nums[i])
        }
        return newArr
    }
    }

// // METHOD2
// // throws error with negative number
// function digitize(n) {
//     return String(n).split('').map(n => Number(n)).reverse()
// }


const answer = digitize(35231)
const answer2 = digitize(-3242)
console.log(answer)

