// to check for palindrome

// Method 1
// function isPalindrome(str) {
//     const len = str.length;
//     let string = str.toLowerCase()

//     if(!str){
//         return true
//     }else{
//         for (let i = 0; i < len / 2; i++) {
//             if (string[i] !== string[len - 1 - i]) {
//                 return false
//             }
//         }
//         return true
//     }
// }

// Method 1 cleaned
function isPalindrome(str) {
    let string = str.toLowerCase()

    if(!str){
        return true
    }else{
        for (let i = 0; i < str.length/2; i++) {
            return (string[i] !== string[len - 1 - i])? false:true
        }
        return true
    }
}

// // Method 2
// const isPalindrome = (x) => {
//         return x.split("").reverse().join("").toLowerCase() === x.toLowerCase() ? true : false
//     }

let answer = isPalindrome('uyngYNOaaonYgnYu')
console.log(answer)
