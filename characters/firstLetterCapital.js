// first letter of each word to be capital
// Jaden Smith casing

// // method 1
// function firstLetterCapital(str){
//     return str.split(' ').map(x => x[0].toUpperCase() + x.slice(1).toLowerCase()).join(' ')
// }


// console.log(firstLetterCapital("How can mirrors be real if our eyes aren't real"))
// console.log(firstLetterCapital("this is to test Whether THIS FUNCTION converts sentences"))



// // method2
String.prototype.toJadenCase = function () {
    return this.split(' ').map(x => x[0].toUpperCase() + x.slice(1).toLowerCase()).join(' ')
};

// creating a new String object
let answer = new String("How can mirrors be real if our eyes aren't real")
console.log(answer.toJadenCase())