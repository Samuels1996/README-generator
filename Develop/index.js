// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkDown = require('./utils/generateMarkdown')


// TODO: Create an array of questions for user input
function userChoices() {
    return inquirer.prompt([
        {name:'License',
        message:'What kind of license would you like to use for this application?',
        type:'list',
        choices: ['GPL', 'Apache', 'MIT']},
        {name:'fileName',
        message:'What is the name of your project?',
        type:'input'},
        {name:'description',
        message:'What is the desired use of this application?',
        type:'input'},
        {name:'test',
        message:'How do I test this application?',
        type:'input'},
        {name:'githubName',
        message:'What is your Github username?',
        type:'input'},
        {name:'title',
        message:'What is the app name?',
        type:'input'},
        {name:'email',
        message:'What is your email address?',
        type:'input'},
        {name:'usage',
        message:'How do i use this application?',
        type:'input'},
        {name:'contributions',
        message: 'How do i contribute to this project?',
        type:'input'},
        {name:'installation',
        message:'How do I install this application',
        type:'input'}

    ]);
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.appendFile(`${fileName}.md`, data, (err) => err ? console.error(err) : console.log(`${fileName}.md has been successfully created.`))
}

// TODO: Create a function to initialize app
async function init() {
    let answers = await userChoices();
    writeToFile((answers.fileName),(generateMarkDown(answers)));
}

// Function call to initialize app
init();
