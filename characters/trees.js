// left hand tree
// for(let i = 1; i<=5; i++){
//     let str = ''
//     for(let j = 1; j<i; j++){
//         str += j + ' '
//     }
//     console.log(str)
// }


// let string = ''
// for(let i = 1; i <=5; i++){
//     for(let j = 1; j<=i;j++){
//         string += '*'
//     }
//     string += '\n'
// }
// console.log(string)


// print a word letter by letter
let word = 'hello world'

let newstring = ''
for(let i = 0; i<=word.length-1; i++){
    for(let j = 0; j <=i; j++){
        newstring += word[j]
    }
    // add a line break
    newstring += '\n'
}
console.log(newstring)

// let newWord = []
// for(let i = 0; i<=word.length-1;i++){
//     newWord.push(word[i])
//     console.log(...newWord)
// }