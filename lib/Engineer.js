// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class engineer extends Employee {
  constructor(e) {
    console.log("Reach Employee");
    
    super(name, id, email);
    this.github = e.github;
    
  }
 
  getName() {
    return name;
  }
  
  getId() {
    return id;
  };
  getEmail() {
    return email;
  };

  getRole() {
    return "Engineer";
  }
  getGithub(){
    return this.github;
  }
}
    
  
module.exports = engineer
