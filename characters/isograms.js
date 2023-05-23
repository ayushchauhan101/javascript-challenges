// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// // Method 1: using hashset only stores unique values
function isIsogram(str){
    let mySet = new Set()
    for(i of str){
        mySet.add(i.toLowerCase())
    }
    return (mySet.size === str.length)? true:false
}


// // Method 2
// function isIsogram(str){
//     let i, j;
//     str = str.toLowerCase();

//     for(i = 0; i < str.length; ++i)
//       for(j = i + 1; j < str.length; ++j)
//         if(str[i] === str[j])
//           return false;
//     return true;
//   }

const answer = isIsogram("moose")
console.log(answer)