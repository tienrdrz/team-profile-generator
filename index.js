//including the required packages
const inquirer = require('inquirer');
const fs = require('fs');

//importing the files needed to generate the page
const generateMarkdown = require('./src/generateMarkdown.js');
const generateEngineer = require('./src/generateEngineer.js');
const generateIntern = require('./src/generateIntern.js');

//importing all the files that are needed to get the data
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

/* Starting the questions, in order to do this properly I will need to
store the data correctly based on a persons role */

const createTeamManager = [];

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
           name: 'officeNumber',
           message: "Please enter the manager's office number.",
           validate: officeNumberInput => {
               if(officeNumberInput) {
                   return true;
               } else {
                  console.log('Invalid office number!');      
               }
           }
       },
    ])
.then (({name, id, email, role, officeNumber}) => {
    const teamManager = new Manager( name, id, email, role, officeNumber);
    createTeamManager.push(teamManager.name, teamManager.id, teamManager.email, teamManager.role, teamManager.officeNumber);
    return generateMarkdown(teamManager);
})
.then (employeeData => {
    return writeToFile(employeeData);
})
.then(pageContent => {
    promptUserNew();
})
   };
   
// here are the questions asked if the new employee added is an engineer

const createnewEngineer = [];

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
 .then (({name, id, email, role, github}) => {
    const newEngineer = new Engineer(name, id, email, role, github);
    createnewEngineer.push(newEngineer.name, newEngineer.id, newEngineer.email, newEngineer.role, newEngineer.github );
    return generateEngineer(newEngineer);
})
.then (employeeData => {
    return writeToFile(employeeData);
})
.then(pageContent => {
    promptUserNew();
})
   };

//creating a prompt to add an intern

const createnewIntern = [];

const promptUserIntern = () => {
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
           name: 'school',
           message: "Please enter the school this employee is currently attending.",
           validate: schoolInput => {
               if(schoolInput) {
                   return true;
               } else {
                  console.log('Invalid School!');      
               }
           }
       },
    ])
    //using then to store the data and create a new engineer object
    .then (({name, id, email, role, school}) => {
       const newIntern = new Intern(name, id, email, role, school);
       createnewIntern.push(newIntern.name, newIntern.id, newIntern.email, newIntern.role, newIntern.school);
       return generateIntern(newIntern);
   })
   .then (employeeData => {
       return writeToFile(employeeData);
   })
   .then(pageContent => {
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
           default: false,
           choices: ['Engineer', 'Intern', 'Finished']
       },
    ])
    // each answer has a different output
    .then(async (answers) => {
        if (answers.role === "Engineer") {
            promptUserEngineer();
        } else if (answers.role === "Intern") {
            promptUserIntern();
        } else {
            console.log("Your team has been created. All done!")
        }
      });
  
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

promptUserManager();


