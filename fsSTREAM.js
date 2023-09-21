const {createReadStream} = require('fs')
//if the file is big so instead of the reading all files we willl read it in chunks using stream
//highwatermark set how much data to read in one stream
const stream = createReadStream('./CheckFS/BIGFILE.txt', {highWaterMark: 90000, encoding: 'utf-8'})

stream.on('data', (result) =>
{
    console.log(result)
})
stream.on('error', (err) =>
{
    console.log(err);
})