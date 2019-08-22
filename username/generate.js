
const axios = require('axios');
const moment = require('moment');
const chalk = require('chalk')
const fs = require('fs')
const letters = 'abcdefghijklmnopqrstuvwxyz'.split('')
// const letters = 'abc'.split('')
const letterArr = []
const occupyName = []
const unoccupyName = []
const timeoutName = []
let occupyCount = 0
let unoccupyCount = 0
let timeoutCount = 0

for (let i = 0; i < letters.length; i++) {
    for (let j = 0; j < letters.length; j++) {
        for (let a = 0; a < letters.length; a++) {
            letterArr.push(letters[i] + letters[j] + letters[a])
        }
    }
}
const total = letterArr.length


function writeFile(content, endDate) {
    content = 'module.exports = ' + JSON.stringify(content)
    fs.writeFile('./username/index.js', content, 'utf8', function (error) {
        if (error) {
            console.log(error);
            return false;
        }
        const duration = moment.duration(moment(endDate) - moment(startDate), 'ms').locale('zh-cn').humanize()
        console.log(chalk.green(`username 获取成功总耗时 ${duration}`));
    })
}
function complete() {
    const endDate = moment().format('YYYY-MM-DD HH:mm:ss')
    console.log(chalk.yellow(` <<<<<<<<<<<<<<<<< end ${endDate} 一共 完成：${total}`))
    const content = {
        occupyName,
        unoccupyName,
        timeoutName,
        occupyCount,
        unoccupyCount,
        timeoutCount,
        total
    }
    writeFile(content, endDate)
}

function getUsername() {
    const name = letterArr.shift()
    if (!name) return complete()
    setTimeout(() => {
        axios.get(`https://github.com/${name}`, { timeout: 10000 }).then((res) => {
            occupyName.push(name)
            occupyCount++
            console.log(chalk.red(`已占用 ==== （${name}）- ${moment().format('HH:mm:ss')} > ${total - letterArr.length}/${total}`))
            getUsername()
        }).catch(err => {
            if (!err.response || err.code === 'ECONNABORTED') {
                // 请求超时把超时名称 重新放回数组
                timeoutName.push(name)
                letterArr.push(name)
                timeoutCount++
                console.log(chalk.green(`请求超时 ==== （${name}）- ${moment().format('HH:mm:ss')} > ${total - letterArr.length}/${total}`))
            } else {
                unoccupyName.push(name)
                unoccupyCount++
                console.log(chalk.green(`未占用 ==== （${name}）- ${moment().format('HH:mm:ss')} > ${total - letterArr.length}/${total}`))
            }
            getUsername()
        });
    }, 3000)
}
const startDate = moment().format('YYYY-MM-DD HH:mm:ss')
console.log(chalk.yellow(`start >>>>>>>>>>>>>>>>>>  ${startDate}`))
getUsername()

