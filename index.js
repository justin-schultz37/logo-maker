
const inquirer = require('inquirer');
const generateSVG = require('./lib/generateSVG');


async function promptUser() {
    const userInput = await inquirer.prompt([
        {
            name: 'text',
            message: 'Enter up to three characters:',
            validate: input => input.length <= 3,
        },
        {
            name: 'textColor',
            message: 'Enter text color (keyword or hex):',
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Choose a shape:',
            choices: ['circle', 'triangle', 'square'],
        },
        {
            name: 'shapeColor',
            message: 'Enter shape color (keyword or hex):',
        },
    ]);


    generateSVG(userInput);
}


promptUser();
