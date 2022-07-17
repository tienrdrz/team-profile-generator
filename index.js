//including the required packages
const inquirer = require('inquirer');
const fs = require('fs');

const generateMarkdown = require('./src/generateMarkdown.js');

//importing all the files that are needed
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

/* Starting the questions, in order to do this properly I will need to
store the data correctly based on a persons role */
const promptUserEngineer = () => {
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
        type: 'input',
        name: 'github',
        message: "Please enter the employee's github username.",
        validate: githubInput => {
            if(githubInput) {
                return true;
            } else {
               console.log('Invalid github username!');      
            }
        }
    },
    //eventually add option to add another engineer?
 ]);
};

//writing a new html file
const writeToFile = fileContent => {
    return new Promise ((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve ({
                ok: true,
                message: 'The HTML page has been generated! Open to see result.'
            });
        });
    });
}

promptUserEngineer()
.then(nameInput => {
    return generateMarkdown(nameInput)
})
.then(pageHTML => {
    return writeToFile(pageHTML)
})