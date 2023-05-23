// TODO: Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
// If the input is an empty array or is null, return an empty array.

// METHOD 1
function countPositivesSumNegatives(input) {
    // check for null or empty input
    if(input === null || input.length === 0){
        return input
    }else{
        let pos = input.filter(input => input>0)

        let neg = input.filter(input => input<0)
        let sum = neg.reduce((a,b) => a+b, 0)

        return ([pos.length,sum])
    }
}

const answer = countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15])
// const answer = countPositivesSumNegatives('')

console.log(answer)


// METHOD 2

// function countPositivesSumNegatives(input) {
//     if (input == null || input.length == 0)
//       return [];
    
//     var positive = 0;
//     var negative = 0;
    
//     for (var i=0, l=input.length; i<l; ++i)
//     {
//       if (input[i] > 0)
//         ++ positive;
//       else
//         negative += input[i];
//     }
    
//     return [positive, negative];
// }