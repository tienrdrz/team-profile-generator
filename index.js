//including the required packages
const inquirer = require('inquirer');
const fs = require('fs');

// const generateMarkdown = require('./src/generateMarkdown.js');

//importing all the files that are needed
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

/* Starting the questions, in order to do this properly I will need to
store the data correctly based on a persons role */
const promptUserEmployee = () => {
 return inquirer.prompt([
    {
        type:'input',
        name:'name',
        message: 'What is the name of this employee?',
        validate: nameInput => {
            if(nameInput) {
                return true;
            } else {
               console.log('Invalid name!');      
            }
        }
    },
    {   
        type:'input',
        name:'id',
        message: 'Please enter the correct employee ID.',
        validate: idInput => {
            if(idInput) {
                return true;
            } else {
               console.log('Invalid ID!');      
            }
        }
    }, 
    {
        type: 'input',
        name: 'email',
        message: "Please enter the employee's email.",
        validate: emailInput => {
            if(emailInput) {
                return true;
            } else {
               console.log('Invalid email!');      
            }
        }
    },
    {
        type: 'confirm',
        name:'confirmAddEmployee',
        message: 'Would you like to add another employee?',
        default: false
    }
 ])
}

promptUserEmployee()