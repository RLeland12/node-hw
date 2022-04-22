// require fs and inquirer and util
const fs = require('fs');
const inquirer = require('inquirer');
const util = require('util');
const writeFileAsync = util.promisify(fs.writeFile);
// link to page where the readme will be developed
const generateMarkdown = require('./generateMarkdown');
 
//array of questions for the user
const questions = () => {
    //inquirer prompts the user with questions   
    return inquirer.prompt([
        {
            type: 'input',
            message: 'Give a discription of the application:',
            name: 'Description',
            validate: nameInput => {
                if (nameInput){
                    return true;
                } else{
                    console.log('Please describe your application');
                    return false;
                }
            }
        },
        {
            type: 'input',
            message: 'Apply your Table of Contents:',
            name: 'Table of Contents',
            validate: nameInput => {
                if (nameInput){
                    return true;
                } else{
                    console.log('Please provide a Table of contents');
                    return false;
                }
            }
        },
        {
            type: 'input',
            message: 'Application install process:',
            name: 'Instillation',
            validate: nameInput => {
                if (nameInput){
                    return true;
                } else{
                    console.log('Please pic your instillation process');
                    return false;
                }
            }
        },
        {
            type: 'input',
            message: 'What is the usage of the application:',
            name: 'Usage',
            validate: nameInput => {
                if (nameInput){
                    return true;
                } else{
                    console.log('Please describe your applications useage');
                    return false;
                }
            }
        },
        {
            type: 'list',
            message: 'Select your license:',
            name: 'License',
            choices: ['English', 'Français', 'Español'],
            validate: nameInput => {
                if (nameInput){
                    return true;
                } else{
                    console.log('Please pick a language provided');
                    return false;
                }
            }
            
        },
        {
            type: 'input',
            message: 'Controbution requirements:',
            name: 'Contributing',
            validate: nameInput => {
                if (nameInput){
                    return true;
                } else{
                    console.log('Please describe your contribution requirements');
                    return false;
                }
            }
        },
        {
            type: 'input',
            message: 'Application Testing guideline:',
            name: 'Tests',
            validate: nameInput => {
                if (nameInput){
                    return true;
                } else{
                    console.log('Please provide your Application Testing guidelines');
                    return false;
                }
            }
        },
        {
            type: 'input',
            message: 'Enter your GitHub username:',
            name: 'GitHub',
            validate: nameInput => {
                if (nameInput){
                    return true;
                } else{
                    console.log('Please enter your GitHub username');
                    return false;
                }
            }
        },
        {
            type: 'input',
            message: 'Enter your Email:',
            name: 'Email',
            validate: nameInput => {
                if (nameInput){
                    return true;
                } else{
                    console.log('Please enter your Email Address');
                    return false;
                }
            }
        },
    ]);

}


//function calling to initilize
// questions()
// .then(data => {
//     return fs.writeFile(data);
// })
// .catch(err => {
//     console.log(err)
// })