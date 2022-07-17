class Intern {

    constructor(name = '', id, email, role, school) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
        this.school = school;
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
    
        getSchool() {
            return `The school that ${this.name} attends is ${this.school}`;
        };
    };

module.exports = Intern;