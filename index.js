const http = require('http');
const { helperReqRes } = require('./helpers/helper');
const env = require('./helpers/environments');

// module scaffolding
const app ={}

// create server
app.createServer = () => {
    const server = http.createServer(app.handleReqRes)
    server.listen(env.port, () => {
        console.log(`Server Listening to port: ${env.port}`)
    })
}

// handle request response
app.handleReqRes = helperReqRes

app.createServer()