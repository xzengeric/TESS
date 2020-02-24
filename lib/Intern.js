// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const employee = require("./Employee");

class intern extends employee {
  constructor(employee) {
    console.log("Reach intern");
    super(name, id, email);
    this.school = employee.school;
    
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
    return "Intern";
  }
  getSchool(){
    return this.school;
  }
}

module.exports = intern;