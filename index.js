//including the required packages
const inquirer = require('inquirer');
const fs = require('fs');

const generateMarkdown = require('./src/generateMarkdown.js');
//importing all the files that are needed
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

/* Starting the questions, in order to do this properly I will need to
store the data correctly based on a persons role */
const promptUser = () => {
 return inquirer.prompt([
    {
        type:'confirm',
        name:'role',
        message: 'Are you an Employee?'
    }
 ])
}


promptUser()