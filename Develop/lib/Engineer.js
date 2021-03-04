// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require('./employee.js');

class Engineer extends Employee {
    constructor(name, email, id, gitHub) {
    super(name, email, id)
    this.gitHub = gitHub;
}
    getRole() {
        return 'Engineer';
    } 
    getGitHub() {
        return this.gitHub
    }
}

module.exports = Engineer;
