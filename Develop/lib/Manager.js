// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
//id, email office #
//engineer: name, id, email github username
//intern name, id email, school
const Employee = require('./employee.js');

class Manager extends Employee {
    constructor(name, email, id, officeNum) {
        super(name, email, id)
        this.officeNum = officeNum;
    }

    getRole() {
        return 'Manager';
    }

    getOfficeNum() {
        return this.officeNum
    }
}

module.exports = Manager;