let pwd = require('./pwd');
let ls = require('./ls');
let cat = require("./cat");
let curl = require("./curl");

// Output a prompt
process.stdout.write('prompt > ');

const done = (output) => {
    process.stdout.write(output);
    process.stdout.write('\nprompt > ');

}

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', (data) => {
    const cmd = data.toString().trim(); // remove the newline
    const cmdArr = cmd.split(" ");

    //process.stdout.write('You typed: ' + cmd);
    if (cmd === 'pwd') {
        pwd(done);
    } else if (cmd === 'ls') {
        //console.log(output)
        //done(ls());
        ls(done);
    } else if (cmdArr[0] === "cat") {
        cat(done, cmdArr[1]);
    } else if (cmdArr[0] === "curl") {
        curl(done, cmdArr[1]);
    } else {
        done('Error: command ' + cmd + ' not found.');
    }
    //process.stdout.write('\nprompt > ');


    //console.log(process.cwd());
})

