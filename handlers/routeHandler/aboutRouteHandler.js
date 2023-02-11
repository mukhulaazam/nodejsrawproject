const handler = {};

handler.aboutHandler = (data, callback) => {
    console.log(data)
    callback(200, {
        message: 'This is about page',
    });
}

module.exports = handler;