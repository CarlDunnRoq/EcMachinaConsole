const prompt = require('prompt-sync')();

let input = '';

while (input != 'QUIT') {
    input = prompt('What is your name?: ');
    input = input.toUpperCase();

    if (input != 'CARL' && input !='QUIT') {
        console.log('Welcome Peasant')
    }
    else if(input != 'QUIT'){
        console.log('Welcome King')
    };
    if (input == 'QUIT'){
        console.log('Goodbye')
    };
}