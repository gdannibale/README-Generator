
var fs = require("fs");
var fileContents = ""; 
const markdown = require("./utils/generateMarkdown.js");
const inquirer = require("inquirer");

inquirer
	.prompt([
		//questions for user
		{
			type: "input",
			name: 'name',
			message: 'What is your GitHub username?',
		},
		{
			type: "input",
			name: 'description',
			message: 'What is the description?',
		},
	])
	.then(answers => {
		//write answers to console 
		console.info('Answer:', answers.name);
		console.info('Answer:', answers.description);
		console.info('Answer:', answers.title);
		
		//format answers for file 
		fileContents = "Name: " + answers.name + "\r\n" + "Description: " + answers.description;

		//write file 
		fs.writeFile ("log.text", fileContents, function(err) {
			if (err) {
				return console.log(err);
			}
				console.log("write file success");
		});
	});
