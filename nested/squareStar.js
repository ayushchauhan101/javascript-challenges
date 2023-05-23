// // method 1
// for(let i=0; i<5; i++){
//     console.log('*****')
// }

// method 2
let n = 5
let string = ''
for(let i=0; i<n; i++){
    for(let j=0;j<n;j++){
        string += '*'
    }
    string += '\n'
}
console.log(string)
