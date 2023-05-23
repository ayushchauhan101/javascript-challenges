let arr = [3,2,5,6,2,5,7,6,1]
console.log(arr)

for(let i = 1; i < arr.length; i++){
    for(let j = 0; j < i; j++){
        if(arr[i] < arr[j]){
            let x = arr[i]
            // switch places
            arr[i] = arr[j]
            arr[j] = x

        }
    }
}

console.log(arr);

// // method 2
// console.log(...arr.sort())