const fs = require('fs');

//'files' will be aray of filenames, like ['bash.js', 'pwd.js']
module.exports = (done) => {
    //done('passing the function works')
    
    fs.readdir('./', 'utf8', (err, files) => {
        if(err) {
            //throw err;
            done('There was an error.');
        } else {
            //output = files.join('\n');
            done(files.join('\n'));
        }
    })
}