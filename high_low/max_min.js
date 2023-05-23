// Write a function that returns both the minimum and maximum number of the given list/array. 

// Method 1
function minMax(arr){
    return [Math.min(...arr),Math.max(...arr)]
}

// // Method 2
// function minMax(arr){
//     let max = arr[0], min = arr[0];
//     for(let i=0; i<arr.length; i++) {
//         if(arr[i]>max) max = arr[i];
//         if(arr[i]<min) min = arr[i];
//     }
//     return [min,max];
//     }

// // Method 3
// function minMax(arr){
//     let max = arr[0], min = arr[0]
//     for(i of arr){
//         if(i > max){
//             max = i
//         }
//         if(i < min){
//             min = i
//         }
//     }
//     return [min,max]
// }

let answer = minMax([2,4,5,2,4,6,78,3])
console.log(answer)
