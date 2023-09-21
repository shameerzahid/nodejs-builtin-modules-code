const {readFile} = require('fs')

// Both callbacks and promises help make our code asynchronous.
//  Making callbacks async can cause issues such as callback hell,
//   so to avoid this we can use promises instead, doing this helps us avoid 
//   this pitfall while keeping our code async and neat.
function getText(path)
{
    return new Promise((resolve, reject) =>
    {
        readFile(path, 'utf-8', (err, data) =>
        {
            if(err)
            {
                reject(err)
            }
            else
            {
                resolve(data)
            }
        })
    })
}

async function start()
{
try {
    const first =await getText('./CheckFS/Firstfile.txt')
    const Second =await getText('./CheckFS/Secondfile.txt')
    console.log(first)
    console.log(Second)
} catch (error) {
    console.log(error)
}
}
start()