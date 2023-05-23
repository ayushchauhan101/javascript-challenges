// take each character and print bumber of times corresponding to its position
// accum("abcd") -> "A-Bb-Ccc-Dddd"

function accum(s) {
	let word = s.split('')
    for(i in word){
        console.log(word[i] * i)
    }
}

const answer = accum('abcd')
console.log(answer)