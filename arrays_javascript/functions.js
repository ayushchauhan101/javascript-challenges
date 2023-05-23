const items = [
    {name: 'Bike', price:100},
    {name: 'TV', price:200},
    {name: 'Album', price:10},
    {name: 'Book', price:5},
    {name: 'Phone', price:500},
    {name: 'Computer', price:1000},
    {name: 'Keyboard', price:25},
]

// // FILTER
// const itemFilter = items.filter((item) => {
//     return item.price <= 100
// })
// console.log(itemFilter)

// // MAP
// const itemNames = items.map((item) => {
//     let x = item.name
//     console.log(x)
// })

// // FIND
// const findItems = items.find((item) => {
//     return item.name.toLowerCase() === 'book'
// })
// console.log(findItems)


// // ForEach
// items.forEach((item) => {
//     console.log(item.name, ':', item.price)
// })

// SOME : return true if condition matches anywhere
const expensiveItems = items.some((item) => {
    return item.price >= 800
})
console.log(expensiveItems)

// // EVERY : return true if all entries satisfies the condition
// const allExpensiveItems = items.every((item) => {
//     return item.price <= 1000
// })
// console.log(allExpensiveItems)

// // REDUCE
// const total = items.reduce((currentTotal, item) => {
//     return item.price + currentTotal
// }, 0)

// console.log(total)

// const nums = [1,2,3,4,5,6,7]
// // INCLUDES
// console.log(nums.includes(2))