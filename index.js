const http = require('http');
const url = require('url');
// module scaffolding
const app ={}

// configuration
app.config ={
    'port': 3000
}

// create server
app.createServer = () => {
    const server = http.createServer(app.handleReqRes)
    server.listen(app.config.port, () => {
        console.log(`Server Listening to port: ${app.config.port}`)
    })
}

// handle request response
app.handleReqRes = (req, res) => {
    const parsedUrl = url.parse(req.url, true)
    const path = parsedUrl.pathname
    const method = req.method.toLowerCase()
    const queryStringObj = parsedUrl.query
    const headersObj = req.headers

    console.log('url=>>',parsedUrl)
    console.log('headers =>>', headersObj)
    res.end('Hola, From the Uptime Monitoring App')
}

app.createServer()