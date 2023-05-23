let n = 5
let string = ''

// outer loop iterations
for(let i = 1; i <= n; i++){

    // adding spaces
    for(let j = 1; j <= n-i; j++){
        string += ' '
    }
    // adding stars
    for(let k = 0; k < 2*i-1; k++){
        string += '*'
    }
    string += '\n'
}
console.log(string)

