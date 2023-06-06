const fs = require('fs');
const inquirer = require('inquirer');
const { Triangle, Circle, Square, Heart } = require('./lib/shapes');

//array for all the questions that are going to be shown to the user
const questArray = [
    {
        name: 'logoShape',
        type: 'list',
        message: 'What shape would you like?',
        choices: ['triangle', 'square', 'circle', 'heart'],
    },
    {
        name: 'colorShape',
        type: 'list',
        message: 'What color would you like your shape to be?',
        choices: [
            'blue',
            'red',
            'green',
            'yellow',
            'purple',
            'pink',
            'orange',
            '#E6E6FA',
            'brown',
            'black',
            'white',
        ],
    },
    {
        name: 'text',
        type: 'input',
        message: 'What letters would you like on your logo?',
        validate: (text) =>
            text.length <= 3 ||
            'The message must not contain more than 3 characters',
    },
    {
        name: 'textColor',
        type: 'list',
        message: 'What color would you like your text to be?',
        choices: [
            'blue',
            'red',
            'green',
            'yellow',
            'purple',
            'pink',
            'orange',
            '#E6E6FA',
            'brown',
            'black',
            'white',
        ],
    },
];

//promise for the answers from the users to create a new file
const { prompt } = inquirer;
prompt(questArray).then(({ logoShape, colorShape, text, textColor }) => {
    let shape;
    switch (logoShape) {
        case 'triangle':
            shape = new Triangle();
            break;
        case 'circle':
            shape = new Circle();
            break;
        case 'square':
            shape = new Square();
            break;
        case 'heart':
            shape = new Heart();
            break;
    }
    shape.setProperties(colorShape, text, textColor);
    fs.writeFile('logo.svg', shape.render(), (error) => {
        if (error) {
            console.error(error);
        }
    });
});
