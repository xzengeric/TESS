// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee.js")


class manager extends Employee {
    constructor(name,id,email,officeNumber) {
      console.log("Reach Manager");
      super(name, id, email);
      
      this.officeNumber = officeNumber;
      
    }

    getRole(){
      return "Manager";
    }
  
    getOfficeNumber() {
      return this.officeNumber;
  
    }
  }
    
    module.exports =  manager 