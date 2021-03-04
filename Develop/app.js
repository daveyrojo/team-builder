const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const members = [];
const idArr = [];
const officeArr = [];
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
function userPrompt() {
    return inquirer.prompt([{
            type: "input",
            name: "empName",
            message: "What is the employee's name?",
            validate: (answer) => {
                if (answer !== "") {
                    return true;
                } return "Please enter atleast one character."
            }
        }, {
            type: "input",
            name: "idNum",
            message: "What is the id # for the employee?",
            validate: (answer) => {
                if (answer === "") {
                    return 'Please enter at least 1 character.';
                } if (idArr.includes(answer)) {
                    return "Please choose a unique ID number.";
                }
                idArr.push(answer);
                return true;
            }
        }, {
            type: "input",
            name: "email",
            message: "What is the employee's email address?",
            validate: (answer) => {
                if (answer.indexOf('@') === -1 || answer.indexOf('.') === -1) {
                    return 'Please input a valid email address.'
                } else {
                    return true;
                }
            }
        }, {
            type: "list",
            name: "empType",
            message: "What is the title of the employee?",
            choices: ["Manager", "Engineer", "Intern"]
        }])
         .then(function (response) {
             if (response.empType === 'Manager') {
                     inquirer.prompt([{
                         type: "input",
                         name: "officeNum",
                         message: 'What is the managers office number?',
                         validate: (answer) => {
                             if (officeArr.includes(answer)) {
                                 return 'Office already taken.'
                             } else {
                                 officeArr.push(answer);
                                 return true;
                             }
                         }
                     }]) .then(function(managerObj) {
                        const newManager = new Manager(
                            response.empName,
                            response.email,
                            response.idNum,
                            managerObj.officeNum
                            );
                        
                        members.push(newManager);

                        addUser();
                     })
            } else if (response.empType === 'Engineer') {
               inquirer.prompt([{
                    type: "input",
                    name: "gitHub",
                    message: "What is the engineer's GitHub username?"
                }]) .then (function(engineerObj) {
                    const newEngineer = new Engineer(
                        response.empName,
                        response.email,
                        response.idNum,
                        engineerObj.gitHub
                    );

                    members.push(newEngineer);

                    addUser();
                }); 
            } else {
                inquirer.prompt([{
                    type: "input",
                    name: "school",
                    message: "What is the intern's school name?"
                }]) .then(function(internObj) {
                    const newIntern = new Intern(
                        response.empName,
                        response.email,
                        response.idNum,
                        internObj.school
                    );

                    members.push(newIntern);

                    addUser();
                })
            
                
            }
        }   
    ) 
        function addUser() {
            inquirer.prompt([
                {
                    type: 'confirm',
                    name: 'continue',
                    message: 'Would you like to add another member to your team?'   
                }
            ])
            .then(function(confirmRes) {
                confirmRes.continue ? userPrompt() : generateHTML();
            });
        }
    };          

userPrompt();

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

function generateHTML() {
    fs.writeFile(outputPath, render(members), 'UTF-8', (err) => {
        console.log('Write to file');
        if (err) throw err;
    });
    console.log(members);
}

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
