// TODO: Write code to define and export the Employee class
class employee {

  constructor(employees) {
    console.log("Reach Employee");
    this.employees.forEach( i  => {
    this.role = employees[i].role;
    this.Name = employees[i].name;
    this.id = employees[i].id;
    this.email = employees[i].email;
});
    
  }

  getName() {
    return name = this.Name;
  }
  getId() {
    return id =this.id ;
  }
  getEmail() {
    return email = this.email;
  }
  getRole() {
    return role =this.role;
  }


}

module.exports = employee;
