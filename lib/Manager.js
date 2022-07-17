class Manager {

    constructor(name = '', id, email, role, officeNumber) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
        this.officeNumber = officeNumber;
       };
       
       getName() {
        return `The name of this ${this.role} is ${this.name}`;
    };
    
        getId() {
        return `This ${this.role}'s ID is ${this.id}`;
        };
    
        getEmail() {
            return `${this.name}'s email is ${this.email}`;
        };
    
        getRole() {
            return `${this.name}'s role is ${this.role}`;
        };
    
        getOfficeNumber() {
            return `This manager's office number is ${this.officeNumber}`;
        };
    };



module.exports = Manager;