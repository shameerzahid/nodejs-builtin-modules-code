const {readFile, writeFile} = require('fs')
const util = require('util')

const Readfileutil = util.promisify(readFile)
const writefileutil = util.promisify(writeFile)

async function start()
{
try {
    const first =await Readfileutil('./CheckFS/Firstfile.txt', 'utf-8')
    const Second =await Readfileutil('./CheckFS/Secondfile.txt','utf-8')
    await writefileutil('./CheckFS/Write.txt', `write ${first} ${Second} `)
    console.log(first)
    console.log(Second)
} catch (error) {
    console.log(error)
}
}
start()