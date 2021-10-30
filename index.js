
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");
const inquirer = require("inquirer");


const questions = [
    {
        type: "input",
        message: "What would you like to name this project?",
        name: "title"
    },
    {
        type: "input",
        message: "Describe your project.",
        name: "description"
    },
    {
        type: "input",
        message: "Installation",
        name: "installation"
    },
    {
        type: "input",
        message: "Application Usage:",
        name: "usage"
    },
    {
        type: "input",
        message: "Contribution Guidelines:",
        name: "contribute"
    },
    {
        type: "input",
        message: "What tests are associated with this project?",
        name: "tests"
    },
    {
        type: "input",
        message: "Enter GitHub username:",
        name: "username",
    },
    {
        type: "input",
        message: "Enter email:",
        name: "email",
    },
    {
        type: "list",
        message: "Choose a license for your project from the following:",
        name: "license",
        choices: ["No License","Apache 2.0","GNU","MIT"]
    }

];


function writeToFile(fileName, data) {
    fs.writeFile(`./output/${fileName}`, data, (err) => err ? console.error(err) : console.log('Your README file has now been created! Please check the `output` folder.'));
}


function init() {
    inquirer
        .prompt(questions)
        .then((response) => {
            const markdownString = generateMarkdown(response);
            writeToFile("README.md", markdownString);
        });
}


init();
