// TODO: Include packages needed for this application
const path = require("path");
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "github",
    message: "type your GitHub Username",
  },
  {
    type: "input",
    name: "email",
    message: "Type your Email address",
  },
  {
    type: "input",
    name: "title",
    message: "type the projects title",
  },
  {
    type: "input",
    name: "description",
    message: "Put a short project description",
  },
  {
    type: "input",
    name: "instalation",
    message: "What command installs the dependencies?",
    default: "npm i",
  },
  {
    type: "input",
    name: "usage",
    message: "how should the repo be used",
  },
  {
    type: "input",
    name: "contributing",
    message: "who contributed to the project and how can anyone contribute?",
  },
  {
    type: "input",
    name: "test",
    message: "what command runs test?",
    default: "npm test",
  },
  {
    type: "list",
    name: "license",
    message: "What license should this project have?",
    choices: ["APACHE 2.0", "BSD 3", "GNU 3.0", "MIT", null],
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
  //prompts questions
  inquirer
    .prompt(questions)
    .then((answers) => {
      console.log("Generating Readme...");
      writeToFile("README.md", generateMarkdown({ ...answers }));
    })
    .catch((error) => {
      if (error.isTtyError) {
        //Prompt could not be rendered in the current environment
        console.log("Prompt could not be rendered in the current environment");
      } else {
        // Somthing went wrong...
        console.log("Somthing went wrong...");
      }
    });
}

// Function call to initialize app
init();
