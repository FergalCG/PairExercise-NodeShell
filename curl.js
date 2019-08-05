const request = require('request');

module.exports = function(url) {
    request(url, function(err, response, body) {
        if (err) {
            throw err;
        } else {
            process.stdout.write(body);
            process.stdout.write("\nprompt > ");
        }
    })
}