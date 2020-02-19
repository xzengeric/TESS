// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class intern extends Employee {


    getName() {
      this.name = employees.name;
    };
    getId() {
      this.id = id;
    };
    getEmail() {
      this.email = employees.email;
    };
    getRole() {
      this.role = employees.role;
    };
  
    getSchool() {
        this.school = employees.school;
    };
  }
  
  module.exports = intern;