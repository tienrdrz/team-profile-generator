//including the required packages
const inquirer = require('inquirer');
const fs = require('fs');

//importing the files needed to generate the page
const generateMarkdown = require('./src/generateMarkdown.js');

//importing all the files that are needed to get the data
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

/* Starting the questions, in order to do this properly I will need to
store the data correctly based on a persons role */
const promptUserManager = () => {
    return inquirer.prompt([
       {
           type:'input',
           name:'name',
           message: 'What is the name of the Team Manager?',
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
           message: 'Please enter the correct manager ID.',
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
           message: "Please enter the manager's email.",
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
           name: 'office',
           message: "Please enter the manager's office number.",
           validate: officeInput => {
               if(officeInput) {
                   return true;
               } else {
                  console.log('Invalid office number!');      
               }
           }
       },
    ])

   };
   
// here are the questions asked if the new employee added is an engineer

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
 ])
 //using then to store the data and create a new engineer object
 .then(({name, id, email, role, github}) => {
    const finalEngineer = new Engineer(name, id, email, role, github);
    // userInputEngineer.push(finalEngineer.name, finalEngineer.id, finalEngineer.email, finalEngineer.role, finalEngineer.github )
    // return generateMarkdown(finalEngineer);
})
.then(inputUserData => {
    promptUserNew();
})
};

//creating a prompt to add a new employee
const promptUserNew = () => {
    return inquirer.prompt([
       {
           type:'list',
           name:'role',
           message: 'What kind of employee would you like to add?',
           choices: ['Engineer', 'Intern', 'Finished']
       }
    ])
}






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

promptUserManager()
// .then(pageHTML => {
// promptUserNew();
// })
.then(nameInput => {
    return generateMarkdown(nameInput)
})
.then(pageHTML => {
    return writeToFile(pageHTML)
})