const {readFileSync, writeFileSync} = require('fs')

const first = readFileSync('./CheckFS/Firstfile.txt', 'utf-8')
const second = readFileSync('./CheckFS/Secondfile.txt', 'utf-8')

console.log(first)
console.log(second);

//this will over write and erase the previous text in file
writeFileSync('./CheckFS/Write.txt','Hello please Write this on file')

// this will append the text on previous
writeFileSync('./CheckFS/Write.txt','Hello please Write this on file', {flag : 'a'})

