const http = require('http')
const {createReadStream} = require('fs')

http.createServer((req, res) =>
{
    const stream = createReadStream('./CheckFS/BIGFILE.txt', {highWaterMark: 90000, encoding: 'utf-8'})
    stream.on('data', (result) =>
{
    //similar functionality but it reads and write data in chunks
    stream.pipe(res)
})
stream.on('error', (err) =>
{
    res.end(err)
})
})

.listen(5000)