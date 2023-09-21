const {readFile, writeFile} = require('fs').promises


async function start()
{
try {
    const first =await readFile('./CheckFS/Firstfile.txt', 'utf-8')
    const Second =await readFile('./CheckFS/Secondfile.txt','utf-8')
    await writeFile('./CheckFS/Write.txt', `write ${first} ${Second}`, {flag: 'a'})
    console.log(first)
    console.log(Second)
} catch (error) {
    console.log(error)
}
}
start()