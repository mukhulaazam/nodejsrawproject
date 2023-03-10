const http = require('http');
const { helperReqRes } = require('./helpers/helper');
const env = require('./helpers/environments');

const createData = require('./lib/data');

// module scaffolding
const app = {}
// @des :: Create and write data to a file
// createData.create('createTest', 'createFileStore', { name: 'Mamun', age: 25 }, (err) => {
//     console.log('error was:',err)
// })

// @des :: Read data from a file
// createData.read('createTest', 'createFileStore', (err, data) => {
//     console.log('error was:',err, 'and data was:', data)
// })

// @des :: Update data inside a file
// createData.update('createTest', 'createFileStore', { name: 'Mamun', age: 25, job: 'Software Engineer' }, (err) => {
//     console.log('error was:',err)
// })

// @des :: delete data inside a file
// createData.delete('createTest', 'createFileStore', { name: 'Mamun', age: 25, job: 'Software Engineer' }, (err) => {
//     console.log('error was:',err)
// })

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