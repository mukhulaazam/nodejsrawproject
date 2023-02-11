// dependencies
const url = require('url');
const { StringDecoder } = require('string_decoder');
const routes = require('../routes');
const { notFoundHandler } = require('../handlers/routeHandler/notFoundHandler');

// module scaffolding
const helpers = {}

helpers.helperReqRes = (req, res) => {
    const parsedUrl = url.parse(req.url, true)
    const path = parsedUrl.pathname
    const trimmedPath = path.replace(/^\/+|\/+$/g, '')
    const method = req.method.toLowerCase()
    const queryStringObj = parsedUrl.query
    const headersObj = req.headers

    const reqProperties = {
        path,
        method,
        parsedUrl,
        headersObj,
        trimmedPath,
        queryStringObj,
    }

    const decoder = new StringDecoder('utf-8')
    let realData = ''

    const chosenHandler = routes[trimmedPath] ? routes[trimmedPath] : notFoundHandler

    chosenHandler(reqProperties, (statusCode, payload) => {
        statusCode = typeof statusCode === 'number' ? statusCode : 500
        payload = typeof payload === 'object' ? payload : {}

        const payloadString = JSON.stringify(payload)

        res.writeHead(statusCode)
        res.end(payloadString)
    })

    req.on('data', (buffer) => {
        realData += decoder.write(buffer)
    })

    req.on('end', () => {
        realData += decoder.end()
        console.log(realData)
        res.end('Hola!, From the Uptime Monitoring App & I am connected to the helper.')
    })

    // console.log('url=>>',parsedUrl)
    // console.log('headers =>>', headersObj)
}

module.exports = helpers