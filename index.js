const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown")
    console.log(generateMarkdown)


// array of questions for user
const questions = [
    {
        type: "input",
        message: "Provide a description of your application",
        name: "description",
    },
    {
        type: "list",
        message: "What license do you want include in your application?",
        name: "license",
        choices: ["MIT", "ISC", "Apache", "Unlicense"]
    }
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data),function(err){
        if (err) throw err
    })
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then(function(answers) {
        console.log(answers)
    })
}

// function call to initialize program
init();
