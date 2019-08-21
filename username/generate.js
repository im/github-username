
const axios = require('axios');
const moment = require('moment');
const chalk = require('chalk')
const fs = require('fs')
// const letters = 'abcdefghijklmnopqrstuvwxyz'.split('')
const letters = 'abc'.split('')
const letterArr = []
const occupyName = []
const unoccupyName = []
let occupyCount = 0
let unoccupyCount = 0
const total = letterArr.length

for (let i = 0; i < letters.length; i++) {
    for (let j = 0; j < letters.length; j++) {
        letterArr.push(letters[i] + letters[j])
    }
}


function writeFile(content) {
    content = 'module.exports = ' + JSON.stringify(content)
    fs.writeFileSync('index.js', content, 'utf8', function (error) {
        if (error) {
            console.log(error);
            return false;
        }
        console.log('写入成功');
    })
}
function complete() {
    const endDate = moment().format('YYYY-MM-DD hh:mm:ss')
    console.log(chalk.yellow(`get username end ${endDate}`))
    const content = {
        occupyName,
        unoccupyName,
        occupyCount,
        unoccupyCount,
        total
    }
    writeFile(content)
}

function getUsername() {
    const name = letterArr.shift()
    if (!name) return complete()
    setTimeout(() => {
        axios.get(`https://github.com/${name}`).then((res) => {
            occupyName.push(name)
            occupyCount++
            console.log(chalk.red(`已占用 ==== （${name}）`))
            getUsername()
        }).catch(err => {
            unoccupyName.push(name)
            unoccupyCount++
            console.log(chalk.green(`未占用 ==== （${name}）`))
            getUsername()
        });
    }, 3000)
}
const startDate = moment().format('YYYY-MM-DD hh:mm:ss')
console.log(chalk.yellow(`get username start ${startDate}`))
getUsername()

