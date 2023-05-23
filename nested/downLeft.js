
// let string = '*'
// // method 1
// for(let i = 5;i>0; i--){
//     console.log(string.repeat(i))
// }

// // method 1 while loop
// let i = 6
// while (i>1){
//     i--
//     console.log(string.repeat(i))
// }


// method 3
let n = 5
let string = ''

for(let i = 0; i<n; i++){
    // printing j number of stars
    for(let j=0; j<n-i; j++){
        string += '*'
    }
    string += '\n'
}
console.log(string)
