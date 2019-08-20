
const request = require('request')
const letters = 'abcdefghijklmnopqrstuvwxyz'.split('')
const letterArr = []

for (let i = 1; i < letters.length; i++) {
    for (let j = 1; j < letters.length; j++) {
        letterArr.push(letters[i] + letters[j])
    }
}

console.log(letterArr.length)
getUsername('im')
function getUsername (name) {
    request({
        url: `https://github.com/${name}`,
        timeout: 1000,
        headers: {
            'Cache-Control': 'no-cach',
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.100 Safari/537.36'
        }
    }, (err, res, body) => {
        if (res) {
            console.log(res.statusCode)
        }
        console.log('err: ', err);
    })
}