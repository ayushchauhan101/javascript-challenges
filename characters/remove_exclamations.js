// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

// // Method 1: using regex(regular expressions)
// function removeExclamationMarks(s) {
//     return s.replace(/!/g, '')
// }

// Method 2
function removeExclamationMarks(s) {
    return s.split('!').join('');
  }

const answer = removeExclamationMarks("jhcgso7211!djsb!vn  fvwer")
console.log(answer)