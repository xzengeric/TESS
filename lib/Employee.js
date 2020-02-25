// TODO: Write code to define and export the Employee class

class Employee {
  
  constructor(employeesFromClass) {
  //  console.log("Reach Employee",employeesFromClass);
    this.role = employeesFromClass.role;
    this.name = employeesFromClass.name;
    this.id = employeesFromClass.id;
    this.email = employeesFromClass.email;
  
  }
  getName() {
    return this.name;
  };
  getId() {
    return this.id;
  };
  getEmail() {
    return this.email;
  };
  getRole() {
   
    return this.role;
  };

}


module.exports = Employee;
