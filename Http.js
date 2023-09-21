const http = require('http')

const server = http.createServer((req, res) =>
{
    if(req.url === '/')
    {
        res.end("Welcome to home page")
    }
    else if(req.url === '/about')
    {
        res.end("Welcome to the about page")
    }
    else
    {
        res.end(`<p>You are At the wrong page</p>
                  <h1>Please! move back</h1>
                  <a href='/'>back</a>`)
    }
})

server.listen(5000)