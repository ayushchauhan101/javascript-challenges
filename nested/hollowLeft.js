let n = 6
let string = ''

// define number of lines
for(let i = 1; i<=n; i++){

    for(let j = 0; j < i; j++){

        // print * in the whole bottom row
        if(i === n){
            string += '*'
        }else{
            // print * in first and last of the line
            if(j === 0 || j === i-1){
                string += '*'
            }else{
                // skip eveything else
                string += ' '
            }
        }
    }
    // 
    string += '\n'
}
console.log(string)