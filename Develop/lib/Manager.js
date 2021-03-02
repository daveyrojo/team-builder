// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
//id, email office #
//engineer: name, id, email github username
//intern name, id email, school

class Manager extends Employee {
    constructor(id, officeNum, email) {
        super(name, 'Manager', id)
        this.officeNum = officeNum;
        this.email = email;
    }
}