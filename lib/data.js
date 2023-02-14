const fs = require('fs');
const path = require('path');

const lib = {};

lib.baseDir = path.join(__dirname, '../.data/');
// console.log(lib.baseDir);

lib.create = (dir, file, data, callblack) => {
    fs.open(`${lib.baseDir + dir}/${file}.json` , "wx", (err, fileDescriptor) => {
        if (!err && fileDescriptor) {
            const stringData = JSON.stringify(data); 

            fs.writeFile(fileDescriptor, stringData, (err) => { 
                if (!err) {
                    fs.close(fileDescriptor, (err) => { 
                        if (!err) {
                            callblack(false);
                        } else {
                            callblack("Error closing new file");
                        }
                    });
                } else {
                    callblack("Error writing to new file");
                }
            });
            
        } else {
            callblack("Could not create new file, it may already exist");
        }
    });
};
// @des :: Read data from a file
lib.read = (dir, file, callblack) => { 
    fs.readFile(`${lib.baseDir + dir}/${file}.json`, "utf8", (err, data) => {
        callblack(err, data);
    });
};

// @des :: Update data inside a file

lib.update = (dir, file, data, callblack) => {
    fs.open(`${lib.baseDir + dir}/${file}.json`, "r+", (err, fileDescriptor) => {
        if (!err && fileDescriptor) {
            const stringData = JSON.stringify(data);

            fs.truncate(fileDescriptor, (err) => {
                if (!err) {
                    console.log('file truncated')
                } else {
                    console.log('file truncate error')
                }
            })
        } else {
            callblack("Could not open the file for updating, it may not exist yet");
        }
    });
};

module.exports = lib;