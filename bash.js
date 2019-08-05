let pwd = require('./pwd');
let ls = require('./ls');

// Output a prompt
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', (data) => {
    const cmd = data.toString().trim(); // remove the newline

    //process.stdout.write('You typed: ' + cmd);
    if(cmd==='pwd') {
        pwd();
    } else if (cmd==='ls') {
        ls();  
    } else {
        process.stdout.write('Error: command ' + cmd + ' not found.');
        process.stdout.write('\nprompt > ');
    }
    //process.stdout.write('\nprompt > ');


    //console.log(process.cwd());
})