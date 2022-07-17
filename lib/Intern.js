const Employee = require('./Employee')

class Intern extends Employee{

    constructor(name = '', id, email, role, school) {
        super(name, id, email)
        this.role = "Intern";
        this.school = school;
       };
       
        getRole() {
            return this.role;
        };
    
        getSchool() {
            return `The school that ${this.name} attends is ${this.school}`;
        };
    };

module.exports = Intern;