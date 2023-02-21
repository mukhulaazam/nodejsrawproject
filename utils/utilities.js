const crypto = require('crypto');
const env = require('./environments');
const utils = {}

// parse string to json object
utils.parseJsonToObject = (jsonString) => {
    let output
    try {
        output = JSON.parse(jsonString);
    } catch (error) {
        output = {};
    }
    return output;
}
utils.makeHash = (str) => {
    if (typeof (str) === 'string' && str.length > 0) {
        const hash = crypto.createHmac('sha256', env[process.env.NODE_ENV]).update(str).digest('hex');
        return hash;
    } else {
        return false;
    }
}
modules.exports = utils;