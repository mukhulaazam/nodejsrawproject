const { aboutHandler } = require('./handlers/routeHandler/aboutRouteHandler')
const { userHandler } = require('./handlers/routeHandler/userRouteHandler')

const routes = {
    'about': aboutHandler,
    'user': userHandler
}

module.exports = routes