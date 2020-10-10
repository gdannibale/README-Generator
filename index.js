
var fs = require("fs");
var fileContents = ""; 
const markdown = require("./utils/generateMarkdown.js");
const inquirer = require("inquirer");

// array of questions for user
const questions = ["title", "username", "description", "tableOfContents"

];
inquirer.prompt([
    {
        type: "input",
        name: "name",
        message: "What is your GitHub username?",

    },
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
        default: "README Generator",
    
    },
    {
        type: "input",
        name: "description",
        message: "What is the description?",
    },
    {
        type: "input",
        name: "Table of Contents",
        message: "What is your table of contents?"
    },
    
])

.then(answers => {
    //write answers to console 
    console.info('Answer:', answers.name);
    console.info('Answer:', answers.description);
    console.info('Answer:', answers.title);
    console.info('Answer:', answers.tableOfContents);

    fileContents = "Name: " + answers.name + "\n" + "Description: " + answers.description + "\n" + "Title:" + answers.title + "\n" + "Table of Contents:" + answers.tableOfContents;

    fs.writeFile ("log.text", fileContents, function(err) {
        if (err) {
            return console.log(err);
        }
            console.log("write file success");
    });
});



// function to write README file
//then(function(data) {

    //fs.writeFile ("log.text", markdown, function(err) {
        //if (err) {
            //return console.log(err);
        //}
        //console.log("success");
    //});


// function to initialize program
//function init() {
    //inquirer.prompt(answers)
    //.then(function(data) {
        //writeToFile("log.text", data);
    //})
//};

// function call to initialize program
//init();
//});
