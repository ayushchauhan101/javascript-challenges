let num = 10

// let n1 = 0
// let n2 = 1
// fibboSum = n1 + n2;

// while (fibboSum <= num) {
//     console.log(fibboSum);

//     n1 = n2;
//     n2 = fibboSum;
//     fibboSum = n1 + n2;
// }


let x1 = 0, x2 = 1, sum = 0

for(let i = 1; i <= num; i++){
    console.log(sum)
    sum = x1 + x2
    x1 = x2
    x2 = sum
}