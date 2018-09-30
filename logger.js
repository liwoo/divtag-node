const fs = require('fs')
const names = 'names.txt'

const fileNames = fs.readFileSync('names.txt').toString().split('\n')

module.exports = { fileNames }
