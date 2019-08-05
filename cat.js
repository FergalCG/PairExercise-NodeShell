const fs = require("fs");

module.exports = (done, file) => {
    fs.readFile(file, (err, data) => {
        if (err) {
            done(err);
        }
        done(data);
    })
}