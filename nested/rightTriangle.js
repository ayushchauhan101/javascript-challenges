let n = 10
let string = ''

for(let i = 1; i <= n; i++){
    // printing spaces
    for(let j = 0; j < n-i; j++){
        string += 'o'
        // string += ' '
    }
    // printing stars
    for(let k = 0; k < i; k++){
        string += 'x'
        // string += '*'
    }
    string += '\n'
}
console.log(string)
