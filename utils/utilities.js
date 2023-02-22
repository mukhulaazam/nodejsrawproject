const crypto = require('crypto');
const env = require('../helpers/environments');
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
        const hash = crypto.createHmac('sha256', env.secretKey).update(str).digest('hex');
        return hash;
    } else {
        return false;
    }
}
module.exports = utils;