const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown")
    console.log(generateMarkdown)


// array of questions for user
const questions = [
    {
        type: "input",
        message: "What is the title of your Application?",
        name: "Title",
    },
    {
        type: "input",
        message: "Please provide a description of your application",
        name: "Description",
    },
    {
        type: "checkbox",
        message: "Please select your table of contents",
        name: "Table Of Content",
        choices: ["Installation", "Usage", "License", "Contribution", "Test", "Questions"] 
    },
    {
        type: "input",
        message: "Please provide instructions on how to install your application",
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
        name: "Test",
    },
    {
        type: "checkbox",
        message: "What license do you want include in your application?",
        name: "License",
        choices: ["MIT", "ISC", "Apache", "Unlicense"]
    },
    {
        type: "name",
        message: "Please provide your GitHub Username",
        name: "GitHub",
    },
    {
        type: "input",
        message: "Please provide your email address",
        name: "Email",
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
    inquirer.prompt(questions).then((answers) => {
            console.log(answers);
        })
}

// function call to initialize program
init();
