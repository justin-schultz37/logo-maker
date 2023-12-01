const inquirer = require('inquirer');
const fs = require('fs');
const { Shapes } = require('./lib/shapes');
const generateSVG = require('./lib/generateSVG');
const colorNames = require('color-name-list');

const validateColor = (input) => {
    const hexColorRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
    const validCSSColorNames = colorNames.map((color) => color.name.toLowerCase());

    return (
        validCSSColorNames.includes(input.toLowerCase()) ||
        hexColorRegex.test(input.toLowerCase()) ||
        'Please enter a valid color.'
    );
};

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
            message: 'Enter text color (css or hex):',
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
        const { shape, shapecolor, ...data } = response;
        const { triangle, circle, square } = Shapes({ shapecolor });
        let SVGContent = '';

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

        writeToFile('logo.svg', SVGContent);
    });

function writeToFile(fileName, SVGContent) {
    fs.writeFile(fileName, SVGContent, (error) => {
        if (error) {
            console.log('Error has occurred!');
        } else {
            console.log('Generated logo.svg');
        }
    });
}


