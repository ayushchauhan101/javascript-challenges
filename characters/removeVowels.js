// remove vowels from the string

// // method 1
// function disemvowel(str) {
//     const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
//     for (let i of vowels){
//         str = str.replaceAll(i, '')
//     }
//     return(str)
// }


// // method 2
// // check if each separate lowecase letter is present in vowels and then join 
// function disemvowel(str) {
//     const vowels = 'aeiou'
//     return str
//         .split('')
//         .filter(letter => !vowels.includes(letter.toLowerCase()))
//         .join('');
// }

// method 3 ; regex
function disemvowel(str) {
    return str.replace(/[aeiou]/gi, '');
}

console.log(disemvowel('This website is for losers LOL!'))
console.log(disemvowel('What are you, a communist?'))
console.log(disemvowel("No offense but,\nYour writing is among the worst I've ever read"))

