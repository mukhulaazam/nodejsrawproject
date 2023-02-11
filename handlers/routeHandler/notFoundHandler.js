const handler = {};

handler.notFoundHandler = (data, callback) => {
    console.log('404 Not Found Handler', data);
    callback(404, {
        message: '404 Not Found',
    });
}

module.exports = handler;