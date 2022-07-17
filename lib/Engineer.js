class Engineer {

    constructor(name = '', id, email, role, github) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
        this.github = github;
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
    
        getGithub() {
            return `${this.name}'s github account is https://github.com/${this.github}`;
        };
    };

module.exports = Engineer;