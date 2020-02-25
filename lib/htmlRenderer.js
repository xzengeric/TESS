const path = require("path");
const fs = require("fs");
const Employee = require("./Employee.js")
const Manager = require("./Manager.js")
const Engineer = require("./Engineer.js")
const Intern = require("./Intern.js")

const templatesDir = path.resolve(__dirname, "../templates");

const render = employees => {
  const html = [];
  
  


  for (let i = 0; i < employees.length; i++) {
    const employeesFromClass = [];
    employeesFromClass[i] = new Employee(employees[i]);
    
    let a = employeesFromClass[i].getRole();
    
    html.push(employees
      .filter(() => a === "Manager")
      .map(manager => renderManager(manager))
    );
    
    html.push(employees
      .filter(() => a === "Engineer")
      .map(engineer => renderEngineer(engineer))
    );
    html.push(employees
      .filter(() => a === "Intern")
      .map(intern => renderIntern(intern))
    );
    console.log(html);
  }


  return renderMain(html.join(""));
};


const renderManager = m=> {
  const manager = new Manager(m);
  let template = fs.readFileSync(path.resolve(templatesDir, "manager.html"), "utf8");
  template = replacePlaceholders(template, "name", manager.getName());
  template = replacePlaceholders(template, "role", manager.getRole());
  template = replacePlaceholders(template, "email", manager.getEmail());
  template = replacePlaceholders(template, "id", manager.getId());
  template = replacePlaceholders(template, "officeNumber", manager.getOfficeNumber());
  return template;
};

const renderEngineer = e => {
  const engineer = new Engineer(e); 
  let template = fs.readFileSync(path.resolve(templatesDir, "engineer.html"), "utf8");
  template = replacePlaceholders(template, "name", engineer.getName());
  template = replacePlaceholders(template, "role", engineer.getRole());
  template = replacePlaceholders(template, "email", engineer.getEmail());
  template = replacePlaceholders(template, "id", engineer.getId());
  template = replacePlaceholders(template, "github", engineer.getGithub());
  return template;
};

const renderIntern = i => {
  const intern = new Intern(i); 
  let template = fs.readFileSync(path.resolve(templatesDir, "intern.html"), "utf8");
  template = replacePlaceholders(template, "name", intern.getName());
  template = replacePlaceholders(template, "role", intern.getRole());
  template = replacePlaceholders(template, "email", intern.getEmail());
  template = replacePlaceholders(template, "id", intern.getId());
  template = replacePlaceholders(template, "school", intern.getSchool());
  return template;
};

const renderMain = html => {
  const template = fs.readFileSync(path.resolve(templatesDir, "main.html"), "utf8");
  return replacePlaceholders(template, "team", html);
};

const replacePlaceholders = (template, placeholder, value) => {
  const pattern = new RegExp("{{ " + placeholder + " }}", "gm");
  return template.replace(pattern, value);
};

module.exports = render;
