
// function arrayDiff(a, b) {
//     let result = []
//     if(a.length === 0 || b.length === 0 ){
//         return a
//     }else{
//         // remove similar numbers 
//         for(i of b){
//             for(j of a){
//                 if (j !== i){
//                     result.push(j)
//                 }
//             }
//         }
//     }
//     return result
// }

function arrayDiff(a,b){
    let common = (a,b)
    let result = []
    for(i of a.values()){
        if (i === common){
            result.push(i)
        }
    }
    return result
}


console.log(arrayDiff([1,2,2,2,3], [2]))
// console.log(arrayDiff([1,2], [1]))
// console.log(arrayDiff([1,2], []))
// console.log(arrayDiff([], [4]))
