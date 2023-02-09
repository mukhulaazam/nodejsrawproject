const http = require('http');
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
    res.end('Hola, From the Uptime Monitoring App')
}

app.createServer()