// take a string of comma separated input and refine them

function separateString(str) {
    const arr = str.split(",");
    const filteredArr = arr.map((str) => str.trim()).filter((str) => str !== "");
    return filteredArr;
}

// console.log(separateString('eating, sleeping, , drinking  '))

function hobbyParser(str){
    let arr =  str.split(',')
    let arr2 = arr.map(x => x.trim()).filter(x => x !== '')
    return arr2
}

console.log(hobbyParser('eating, sleeping, , drinking  '))