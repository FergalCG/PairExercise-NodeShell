let pwd = require('./pwd');
let ls = require('./ls');
let cat = require("./cat");
let curl = require("./curl");

// Output a prompt
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', (data) => {
    const cmd = data.toString().trim(); // remove the newline
    const cmdArr = cmd.split(" ");
    console.log(cmdArr);

    //process.stdout.write('You typed: ' + cmd);
    if (cmd === 'pwd') {
        pwd();
    } else if (cmd === 'ls') {
        ls();
    } else if (cmdArr[0] === "cat") {
        cat(cmdArr[1]);
    } else if (cmdArr[0] === "curl") {
        curl(cmdArr[1]);
    } else {
        process.stdout.write('Error: command ' + cmd + ' not found.');
        process.stdout.write('\nprompt > ');
    }
    //process.stdout.write('\nprompt > ');


    //console.log(process.cwd());
})