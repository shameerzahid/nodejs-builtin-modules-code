const {readFile,writeFile} = require('fs')
//use callback because async so will not be dependent and next will execute even if previous failed
readFile('./CheckFS/Firstfile.txt','utf-8', (err,result) =>
{
    if(err)
    {
        console.log(err)
        return 0
    }
    const first = result
    writeFile('./CheckFS/newfile.txt', first, (err, result) =>
    {
        if(err)
        {
            console.log(err)
            return 0
        }
        console.log("Successfully done")
    })
})