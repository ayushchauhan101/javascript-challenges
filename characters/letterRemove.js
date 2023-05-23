function letterRemove(word){
    let question = word.split('')
    for(x of question){
        let answer = []
        if (x !== 'a'){
            answer.push(x)
        }
        return answer
    }
}

console.log(letterRemove('ayush'))