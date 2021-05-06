// imports
const inquirer = require("inquirer");
const generatorMarkdown = require("./utils/generateMarkdown")
const fs = require("fs"); 

// Questions asked to the user
const questions = [
  {
    type: "input",
    message: "Name of README file?",
    name: "Filename",
  },
  {
    type: "input",
    message: "What is the title of your project?",
    name: "Title",
  },
  {
    type: "input",
    message: "Please give description of your project.",
    name: "Description",
  },
  {
    type: "input",
    message: "What dependencies needed to be installed?",
    name: "Installation",
  },
  {
    type: "input",
    message: "What is this app used for?",
    name: "Usage",
  },
  {
    type: "list",
    message: "What license is it under?",
    name: "License",
    choices: [
        "MIT",
        "Unlicense",
        "Apache 2.0",
        "GNU v3",
        "BSD 3-Clause",
        "Mozilla Public License 2.0"
    ]
    },
  {
    type: "input",
    message: "Who else contributed to this project?",
    name: "Contributor",
  },
  {
    type: "input",
    message: "What command do you use to test this App?",
    name: "Test",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "Email",
  },
  {
    type: "input",
    message: "What is your github username?",
    name: "Username",
  },
];

// Writes a file 
function writeToFile(fileName, data) {
fs.writeFile(fileName, data, function(err) {
  if (err) {
    return console.log(err);
  }
  console.log ("Successfully wrote: " + fileName);
})

}


// initializes function
function init() {
  inquirer.prompt(questions)
  .then(function(data) {
      let readme = generatorMarkdown(data);
    writeToFile(data.Filename+".md", readme);
  })
}


// runs the function
init();