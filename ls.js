const fs = require('fs');

//'files' will be aray of filenames, like ['bash.js', 'pwd.js']
module.exports = function () {
    fs.readdir('./', 'utf8', (err, files) => {
        if(err) {
            throw err;
        } else {
            process.stdout.write(files.join('\n'));
            process.stdout.write('\nprompt > ');
        }
    })
}