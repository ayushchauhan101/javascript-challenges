// TODO: return a string if the first letter starts with 'R' or 'r'

// method 1
// function areYouPlayingBanjo(name) {
//     if(name[0].toUpperCase() === 'R'){
//       return name + ' plays banjo'
//     }else{
//     return name + ' does not play banjo';
//     }
//   }

// method 2
function areYouPlayingBanjo(name) {
    return name + (name[0].toUpperCase() === 'R' ? ' plays' : ' does not play') + " banjo";
  }

const answer = areYouPlayingBanjo('adam')
const answer2 = areYouPlayingBanjo('ringo')
console.log(answer)
console.log(answer2)