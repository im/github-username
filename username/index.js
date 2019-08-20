

const letters = 'abcdefghijklmnopqrstuvwxyz'.split('')
const letterArr = []

for (let i = 1; i < letters.length; i++) {
    for (let j = 1; j < letters.length; j++) {
        for (let a = 1; a < letters.length; a++) {
            letterArr.push(letters[i] + letters[j] + letters[a])
        }
    }
}

console.log(letterArr.length)