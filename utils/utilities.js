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

modules.exports = utils;