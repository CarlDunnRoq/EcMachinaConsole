const prompt = require('prompt-sync')();

let input = '';

while (input != 'QUIT') {
    input = prompt('what is your name?: ');
    input = input.toUpperCase();

    if (input == 'CARL'){
        console.log('Welcome ')
    }

}