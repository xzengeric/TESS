const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const employees = [];

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

init();
function init() {
    console.log("Welcome to Template Engine - Employee Summary")
    buildTeam();
}

function buildTeam() {
    inquirer
        .prompt([
            {
                type: "list",
                name: "role",
                message: "What's your/your mamber's role?",
                choices: ["Manager", "Engineer", "Intern"]
            },
        ]).then(val => {
            // If the user says yes to another game, play again, otherwise quit the game
            if (val.role === "Manager") {
                this.role = val.role;
                buildManager(role);
            } else if (val.role === "Engineer") {
                this.role = val.role;
                buildEngineer(role);
            } else if (val.role === "Intern") {
                this.role = val.role;
                buildIntern(role);
            } else {
                askAgain();
            };
        });
};
function askAgain() {
    inquirer
        .prompt([
            {
                type: "confirm",
                name: "choice",
                message: "More team member?"
            }
        ]).then(val => {
            // If the user says yes to another game, play again, otherwise quit the game
            if (val.choice) {
                buildTeam();
            } else {
                done();
            };
        });
};

function buildManager(role) {

    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: " Please enter your name?"
        },
        {
            type: "input",
            name: "id",
            message: " Please enter your ID?"
        },
        {
            type: "input",
            name: "officeNumber",
            message: " Please enter the officeNumber?"
        }
    ]).then(val => {
        this.name = val.name;
        this.id = val.id;
        this.officeNumber = val.officeNumber;
        employees.push({
            'name': name,
            'id': id,
            'role': role,
            'officeNumber': officeNumber,
        });
        askAgain();

    });
};

function buildEngineer(role) {

    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: " Please enter your name?"
        },
        {
            type: "input",
            name: "id",
            message: " Please enter your ID?"
        },
        {
            type: "input",
            name: "github",
            message: " Please enter your github username?"
        }
    ]).then(val => {
        this.name = val.name;
        this.id = val.id;

        this.github = val.github;
        employees.push({
            'name': name,
            'id': id,
            'role': role,
            'github': github,
        });
        askAgain();

    });
};

function buildIntern(role) {

    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: " Please enter your name?"
        },
        {
            type: "input",
            name: "id",
            message: " Please enter your ID?"
        },
        {
            type: "input",
            name: "school",
            message: " Please enter your school?"
        }
    ]).then(val => {
        this.name = val.name;
        this.id = val.id;
        this.school = val.school;
        employees.push({
            'name': name,
            'id': id,
            'role': role,
            'school': school,
        });
        askAgain();

    });
};


function done() {
    console.log(employees);
    render(employees);
};










// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an 
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work!```
