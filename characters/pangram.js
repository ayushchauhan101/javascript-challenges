// check if string contains all english letters

// // method 1
// function isPangram(sentence) {
//     let lowerCased = sentence.toLowerCase();
//     for (let char of 'abcdefghijklmnopqrstuvwxyz') {
//         if (!lowerCased.includes(char)) {
//             return false
//         }
//     }
//     return true;
// }

// // method 2
// function isPangram(string){
//     let char = 'abcdefghijklmnopqrstuvwxyz'.toLowerCase()
//     return char.split('').every((x) => string.includes(x))
// }


// method 3
function isPangram(string) {
    var sentence = string.toLowerCase();
    var letters = "abcdefghijklmnopqrstuvwxyz";

    for (let x of letters){
        // check whether letter is not present
        if (sentence.indexOf(x) == -1)
            return false;
        }
    return true;

}

console.log(isPangram('The quick brown fox jumps over the lazy dog.'))
console.log(isPangram('This is not a pangram.'))
