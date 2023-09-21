const path = require('path')

console.log(path.sep)

const joinpath = path.join('/Checkpath/', 'subcheck', 'check.txt')
console.log(joinpath)

const base = path.basename(joinpath)
console.log(base)

const absolute = path.resolve(__dirname, '/Checkpath/', 'subcheck', 'check.txt')
console.log(absolute)