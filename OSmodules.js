const os = require('os')

console.log(os.userInfo())
console.log(os.homedir())
console.log(`the uptime is ${os.uptime()} `)

const Osinfo = 
{
    name: os.type(),
    freemem: os.freemem(),
    availmem: os.totalmem(),
    release: os.release()
}

console.log(Osinfo);