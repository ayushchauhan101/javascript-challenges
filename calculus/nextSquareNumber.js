// find the next integral perfect square after the one passed as a parameter.
// If the parameter is itself not a perfect square then -1 should be returned.

// method 1
// function findNextSquare(sq) {
//     let root = Math.sqrt(sq)
//     return Number.isInteger(root)? Math.pow(root+1, 2) : -1
// }

// method 2
function findNextSquare(sq) {
    return Math.sqrt(sq)%1? -1 : Math.pow(Math.sqrt(sq)+1,2);
  }

console.log(findNextSquare(num))