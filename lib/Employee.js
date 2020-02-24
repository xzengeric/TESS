// TODO: Write code to define and export the Employee class

class employee {



  constructor(employee) {
      console.log("employee class:" ,employee);

      this.Name = employee.name;
      this.id = employee.id;
      this.role = employee.role;
      this.email = employee.email;
      
     console.log(this.Name);
    
  }

  getName() {
    return this.Name;
  }
  getId() {
    return this.id;
  };
  getEmail() {
    return this.email;
  }
  getRole() {
    return this.role;
  }


}

module.exports = employee;
