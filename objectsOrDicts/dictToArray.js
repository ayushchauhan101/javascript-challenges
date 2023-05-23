// question 1
// let input = [{ a: 1 }, { b: 2 }, { c: 3 }]


// let output = { a: 1, b: 2, c: 3 }



// const arr = [
//     { key: 1, value: 10 },
//     { key: 2, value: 20 },
//     { key: 3, value: 30 },
// ];

// const reformattedArray = arr.map(({ key, value }) => ({ [key]: value }));

// console.log(reformattedArray) 
//[{ 1: 10 }, { 2: 20 }, { 3: 30 }]



const fullNames = [{first: 'Albus', last: 'Dumbledore'}, {first: 'Harry', last: 'Potter'}, {first: 'Hermione', last: 'Granger'}, {first: 'Ron', last: 'Weasley'}, {first: 'Rubeus', last: 'Hagrid'}, {first: 'Minerva', last: 'McGonagall'}, {first: 'Severus', last: 'Snape'}];

// let names = fullNames.map((x) => x.first + ' ' + x.last)
// console.log(names)

let firstNames = fullNames.map((x) => x.first)
console.log(firstNames)