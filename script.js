const inquire = require('inquirer');

class Employee {
    constructor(name, position, id, email) {
        this.name = name;
        this.position = position;
        this.id = id;
        this.email = email;
    }
}

class Manager extends Employee {
    constructor(name, position, id, officeNum, email) {
        super(name, 'Manager', id, email)
        this.officeNum = officeNum;
    }
}





const questions = {
    "genQuest": [{
        type: "input",
        name: "empName",
        message: "What is the employee's name?",
        validate: (answer) => {
            if (answer !== "") {
                return true;
            } return "Please enter atleast one character."
        }
    },{
        type: "input",
        name: "idNum",
        message: "What is the id # for the employee?",
        validate: (answer) => {
            if (answer !== ""){
                return 'Please enter at least 1 number.';
            } if (idArr.includes(answer)) {
                return "Please choose a unique ID number.";
            }
            idArr.push(answer);
            return true;
        }
    },{
        type: "input",
        name: "email",
        message: "What is the employee's email address?"
    },{
        type: "list",
        name: "empType",
        message: "What is the title of the employee?",
        choices: ["manager", "engineer", "intern"]
    }],
    "managerQuestion": [{
        type: "input",
        name: "officeNum",
        message: 'What is the managers office number?'
        
    }],
    "enginnerQuestion": [{
        type: "input",
        name: "gitHub",
        message: "What is the engineer's GitHub username?"
    }],
    "internQuestion": [{
        type: "input",
        name: "school",
        message: "What is the intern's school name?"
    }]
};







//             }

//         } else if (questions.empType === 'Engineer') {

//             function createEngineer() {

//                 const enginnerQuestion = [{
//                     type: "input",
//                     name: "gitHub",
//                     message: "What is the engineer's GitHub username?"
//                 }]; 

//             }

//         } else {
//             function createIntern() {


//                 const internQuestion = [{
//                     type: "input",
//                     name: "school",
//                     message: "What is the intern's school name?"
//                 }];
//             }
//         }   
// };