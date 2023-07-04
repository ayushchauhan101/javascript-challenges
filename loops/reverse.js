// to reverse an input of string

function reverseFunction (arg) {
    let result = ''
    for (let i = arg.length - 1; i >= 0; i--) {
        result += arg[i]
    }
    console.log(result)
}

reverseFunction('hello')
reverseFunction('do this too')
reverseFunction([1, 2, 3, 5, 3, 6])