// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const employee = require("./Employee");

class engineer extends employee {
  constructor(employeesFromClass) {
    console.log("Reach Employee");
    console.log(employeesFromClass);
    super(name, id, email);
    this.github = employeesFromClass[i].github;
    
  }
  getName() {
    return this.Name;
  }
  getId() {
    return this.id ;
  }
  getEmail() {
    return this.email;
  }
  getRole() {
    return "Engineer";
  }
  getGithub(){
    return this.github;
  }
}
    
  
module.exports = engineer
