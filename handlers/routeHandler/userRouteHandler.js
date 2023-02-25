const data = require('../../lib/data');
const { makeHash } = require('../../utils/utilities');
const { parseJsonToObject } = require('../../utils/utilities');
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

// @des :: Get a or all user
handler._users.get = (reqProperties, callback) => {
    const userName = typeof (reqProperties.queryStringObj.userName) === 'string' && reqProperties.queryStringObj.userName.trim().length > 0 ? reqProperties.queryStringObj.userName : false;

    if (userName) {
        data.read('users', userName, (err, u) => {
            const user = { ...parseJsonToObject(u)};
            if (!err && user) {
                delete user.password;
                callback(200, user);
            } else {
                callback(404, {
                    error: 'User not found',
                });
            }
        });
    } else {
        callback(422, {
            message: 'You have a problem in your request',
        });
    }
};
// @des :: Create a new user
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
                data.create('users', userName, userObj, (err) => {
                    if (!err) {
                        callback(200, {
                            message: 'User created successfully',
                        });
                    } else {
                        callback(500, {
                            error: 'There was a server side error',
                        });
                    }
                });
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
// @des :: Update a user
handler._users.put = (reqProperties, callback) => {
    const userName = typeof (reqProperties.body.userName) === 'string' && reqProperties.body.userName.trim().length > 0 ? reqProperties.body.userName : false;

    const password = typeof (reqProperties.body.password) === 'string' && reqProperties.body.password.trim().length > 0 ? reqProperties.body.password : false;

    const mobile = typeof (reqProperties.body.mobile) === 'string' && reqProperties.body.mobile.trim().length > 0 ? reqProperties.body.mobile : false;

};
// @des :: Delete a user
handler._users.delete = (reqProperties, callback) => { };

module.exports = handler;