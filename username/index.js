
const request = require('request')
const axios = require('axios');
const letters = 'abcdefghijklmnopqrstuvwxyz'.split('')
const letterArr = ['aaa', 'bbb', 'ccc']
const successName = []
const failName = []
let successCount = 0;
let failCount = 0;
let completeTotal = 0


// for (let i = 1; i < letters.length; i++) {
//     for (let j = 1; j < letters.length; j++) {
//         letterArr.push(letters[i] + letters[j])
//     }
// }

const total = letterArr.length

getUsername(letterArr[0])
function getUsername (name) {
    axios.get(`https://github.com/${name}`).then((res) => {
        successName.push(name)
        successCount++
        completeTotal++
    }).catch(err => {
        failName.push(name)
        failCount++
        completeTotal++
    });
}

