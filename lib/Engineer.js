// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class engineer extends Employee {
    getName() {
        this.name = employees.name;
      }
      getId() {
        this.id = id;
      }
      getEmail() {
        this.email = employees.email;
      }
      getRole() {
        this.role = employees.role;
      }
      
      getGithub(){
          this.github = employees.github;
      }
    
    }
module.exports = engineer
