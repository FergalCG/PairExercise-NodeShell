const request = require('request');

module.exports = (done, url) => {
    request(url, function(err, response, body) {
        if (err) {
            done(err);
        } else {
            done(body);
        }
    })
}