// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// // Method 1
// function highAndLow(numbers){
//     let nums = numbers.split(' ')
//     Array.from(nums)
//     function compareNumbers(a, b) {
//         return a - b;
//     }
//     let sorted_array = (nums.sort(compareNumbers))  

//     return(`${sorted_array[sorted_array.length - 1]} ${sorted_array[0]}`)
// }

// // Method 2
// function highAndLow(numbers){
//     numbers = numbers.split(' ').map(Number);
//     return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
//   }

// Method 3
function highAndLow(numbers){
    numbers = numbers.split(' ');
    return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}

// let answer = highAndLow(("1 2 3"), "3 1")
let answer = highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4")
console.log(answer)