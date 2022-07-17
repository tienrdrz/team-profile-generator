const Employee = require('./Employee')

class Manager extends Employee {

    constructor(name = '', id, email, role, officeNumber) {
        super(name, id, email)
        this.role = "Manager";
        this.officeNumber = officeNumber;
       };
    
        getRole() {
            return this.role;
        };
    
        getOfficeNumber() {
            return `This manager's office number is ${this.officeNumber}`;
        };
    };



module.exports = Manager;