// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const employee = require("./Employee");

class engineer extends employee {
  constructor(employee) {
    console.log("Reach Employee");
    
    super(name, id, email);
    this.github = employee.github;
    
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
