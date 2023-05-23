const vowels = ['a', 'e', 'i', 'o', 'u']

function countVowels(word){
    word = word.toLowerCase().replaceAll(' ', '')
    let numVowels = 0
    let numCons = 0
    for (x of word){
        if(vowels.includes(x)){
            numVowels += 1
        } else {
            numCons += 1
        }
    }
    return `the number of vowels: ${numVowels} and consonants: ${numCons} in the word ${word}`
}

// console.log(countVowels('aeroplane'))
// console.log(countVowels('laptop'))
// console.log(countVowels('SKouba'))
console.log(countVowels('ayush chauhan'))