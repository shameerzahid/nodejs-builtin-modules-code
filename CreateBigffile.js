const {writeFileSync} = require('fs')

for(let i=0;i<10000;i++)
{
    writeFileSync('./CheckFS/BIGFILE.txt',"Hello world!\n", {flag: 'a'} )
}
