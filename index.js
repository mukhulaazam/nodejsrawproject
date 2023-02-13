const http = require('http');
const { helperReqRes } = require('./helpers/helper');
const env = require('./helpers/environments');

const createData = require('./lib/data');

// module scaffolding
const app = {}

createData.create('createTest', 'createFileStore', { name: 'Mamun', age: 25 }, (err) => {
    console.log('error was:',err)
})

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