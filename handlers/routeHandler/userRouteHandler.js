const data = require('../../lib/data');
const { makeHash } = require('../../utils/utilities');
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
handler._users.post = (reqProperties, callback) => {
    const userName = typeof (reqProperties.body.userName) === 'string' && reqProperties.body.userName.trim().length > 0 ? reqProperties.body.userName : false;

    const password = typeof (reqProperties.body.password) === 'string' && reqProperties.body.password.trim().length > 0 ? reqProperties.body.password : false;
    
    const mobile = typeof (reqProperties.body.mobile) === 'string' && reqProperties.body.mobile.trim().length > 0 ? reqProperties.body.mobile : false;
    if (userName && password && mobile) {
        data.read('users', userName, (err, user) => {
            if (err) {
                const userObj = {
                    userName,
                    password: makeHash(password),
                    mobile,
                }
            } else {
                error : 'User already exists'
            }
        });
    } else {
        callback(422, {
            message: 'You have a problem in your request',
        });
    }
};
handler._users.put = (reqProperties, callback) => { };
handler._users.delete = (reqProperties, callback) => { };

module.exports = handler;