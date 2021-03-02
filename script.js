class Employee {
    constructor(name, position, id, emaill) {
        this.name = name;
        this.position = position;
        this.id = id;
        this.email = email;
    }
}

class Manager extends Employee {
    constructor(name, id, officeNum, email) {
        super(name, 'Manager', id, email)
        this.officeNum = officeNum;
    }
}

class Engineer extends Employee {
    constructor(name, id, email, gitHub) {
        super(name, 'Engineer', id, email)
        this.gitHub = gitHub;
    }
}

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, 'Intern', id, email);
        this.school = school;
    }
}