// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const employee = require("./Employee");

class manager extends employee {
  constructor(employeesFromClass) {
    console.log("Reach Employee");
    super(name, id, email);
    this.OfficeNumber = employeesFromClass[i].OfficeNumber;
    
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
    return "Manager";
  }
  getOfficeNumber() {
    return this.OfficeNumber;

  }
}
  
  module.exports =  manager 
;