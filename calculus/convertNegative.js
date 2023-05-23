// // method 1
// function makeNegative(num) {
//     return (num>0)? num-(num*2) : num
// }

// // method 2
// function makeNegative(num){
//     return -Math.abs(num)
// }

// method 3
function makeNegative(num){
    return (num>0)? -num : num
}

const answer = makeNegative(23.1)
console.log(answer)
