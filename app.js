const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const team = [];
let id = 0;

init();

function init() {
    console.log("Welcome to Template Engine - Employee Summary")
    buildTeam();
};

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
    id = id + 1;
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
            name: "email",
            message: " Please enter your email?"
        },
        {
            type: "input",
            name: "officeNumber",
            message: " Please enter the officeNumber?"
        }
    ]).then(val => {
        this.name = val.name;
        this.id = id;
        this.email = val.email;
        this.officeNumber = val.officeNumber;

        const manager = new Manager(name, id, email, officeNumber);


        team.push(manager);
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
            name: "email",
            message: " Please enter your email?"
        },
        {
            type: "input",
            name: "github",
            message: " Please enter your github username?"
        }
    ]).then(val => {
        this.name = val.name;
        this.id = id;
        this.email = val.email;
        this.github = val.github;

        const engineer = new Engineer(name, id, email, github);


        team.push(engineer);

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
            name: "email",
            message: " Please enter your email?"
        },
        {
            type: "input",
            name: "school",
            message: " Please enter your school?"
        }
    ]).then(val => {
        this.name = val.name;
        this.id = id;
        this.email = val.email;
        this.school = val.school;

        const intern = new Intern(name, id, email, school);

        team.push(intern);

        askAgain();

    });
};


function done() {

    fs.writeFileSync(outputPath, render(team));
    console.log("File is create to", outputPath);

};

