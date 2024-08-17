// TODO: Include packages needed for this application
const path = require("path");
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [];

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
