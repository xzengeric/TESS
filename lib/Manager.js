// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee.js")


class manager extends Employee {
  constructor(m) {
    console.log("Reach Manager");
    super(name, id, email);
    console.log("------------------------------------------------");
    console.log(m,  m.OfficeNumber);
    console.log("------------------------------------------------");
    this.OfficeNumber = m.officeNumber;
    
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
  
  getRole(){
    return "Manager";
  }

  getOfficeNumber() {
    return this.OfficeNumber;

  }
}
  
  module.exports =  manager 
;