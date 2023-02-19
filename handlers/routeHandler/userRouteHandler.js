const handler = {};

handler.userHandler = (reqProperties, callback) => {
    const allowedMethods = ['get', 'post', 'put', 'delete'];
    if (allowedMethods.indexOf(reqProperties.method) > -1) {
        handler._users[reqProperties.method](reqProperties, callback);
    } else {
        callback(405);
    }
}
handler._users = {};

handler._users.get = (reqProperties, callback) => {
    callback(200, {
        message: 'This is a get request',
    });
};
handler._users.post = (reqProperties, callback) => { };
handler._users.put = (reqProperties, callback) => { };
handler._users.delete = (reqProperties, callback) => { };
module.exports = handler;