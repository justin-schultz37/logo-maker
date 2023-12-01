const inquirer = require('inquirer');
const fs = require('fs');
const { Shapes } = require('./lib/shapes');
const generateSVG = require('./lib/generateSVG');
const colorNames = require('color-name-list');

// Function to validate color input (CSS color names or hex)
const validateColor = (input) => {
    const hexColorRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
    const validCSSColorNames = colorNames.map((color) => color.name.toLowerCase());

    return (
        validCSSColorNames.includes(input.toLowerCase()) ||
        hexColorRegex.test(input.toLowerCase()) ||
        'Please enter a valid color.'
    );
};

// Inquirer prompt to gather user input for logo creation
inquirer
    .prompt([
        {
            type: 'input',
            name: 'characters',
            message: 'Enter up to three characters.',
            validate: input => input.length <= 3,
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter text color (CSS or hex):',
            validate: validateColor,
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Choose a shape:',
            choices: ['circle', 'triangle', 'square'],
        },
        {
            type: 'input',
            name: 'shapecolor',
            message: 'Enter a shape color',
            validate: validateColor,
        },
    ])
    .then((response) => {
        // Destructure response and extract shapecolor
        const { shape, shapecolor, ...data } = response;
        // Create Shapes instance with shapecolor
        const { triangle, circle, square } = Shapes({ shapecolor });
        let SVGContent = '';

        // Generate SVG content based on the selected shape
        switch (shape) {
            case 'triangle':
                SVGContent = generateSVG(data, triangle);
                break;
            case 'circle':
                SVGContent = generateSVG(data, circle);
                break;
            case 'square':
                SVGContent = generateSVG(data, square);
                break;
            default:
                console.log('Invalid shape specified in data.');
                return;
        }

        // Write SVG content to file
        writeToFile('logo.svg', SVGContent);
    });

// Function to write SVG content to a file
function writeToFile(fileName, SVGContent) {
    fs.writeFile(fileName, SVGContent, (error) => {
        if (error) {
            console.log('Error has occurred!');
        } else {
            console.log('Generated logo.svg');
        }
    });
}
