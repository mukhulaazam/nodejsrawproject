const http = require('http');
const { helperReqRes } = require('./helpers/helper');

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
app.handleReqRes = helperReqRes

app.createServer()