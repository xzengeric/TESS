// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class intern extends Employee {
  constructor(i) {
    console.log("Reach intern");
    super(name, id, email);
    this.school = i.school;
    
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
    return "Intern";
  }
  getSchool(){
    return this.school;
  }
}

module.exports = intern;



