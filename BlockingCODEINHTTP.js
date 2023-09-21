const http = require('http')

const server = http.createServer((req,res) =>
{
if(req.url === "/")
{
    res.end('Home')
}
else if(req.url === "/about")
{
    //blockin code 
    for(let i=0;i<1000;i++)
        for(let j=0;j<1000;j++)
        console.log(`Number is ${i} ${j}`)
    res.end('About page')
}
else 
{
    res.end('Wrong pages')
}
})

server.listen(5000, () =>
{
    console.log("Listening on port 5000")
})