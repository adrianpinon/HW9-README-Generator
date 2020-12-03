const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown")
    console.log(generateMarkdown)


// array of questions for user
const questions = [
    {
        type: "input",
        message: "Provide a description of your application",
        name: "Description",
    },
    {
        type: "input",
        message: "Enter the table of contents",
        name: "Table Of Content",
    },
    {
        type: "input",
        message: "Please provide instructions on how to install you application",
        name: "Installation",
    },
    {
        type: "input",
        message: "Please provide usage information",
        name: "Usage",
    },
    {
        type: "input",
        message: "Please provide contribution guidelines",
        name: "Contribution Guidelines",
    },
    {
        type: "input",
        message: "Please provide test instructions",
        name: "Test Instructions",
    },
    {
        type: "checkbox",
        message: "What license do you want include in your application?",
        name: "license",
        choices: ["MIT", "ISC", "Apache", "Unlicense"]
    }
    {
        type: "input",
        message: "Please provide your GitHub Username",
        name: "GitHub",
    },
    {
        type: "input",
        message: "Please provide your email address",
        name: "",
    },
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
