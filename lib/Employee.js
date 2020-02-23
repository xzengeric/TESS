// TODO: Write code to define and export the Employee class

class employee {

  constructor(employees) {
    for (let i = 0; i < employees.length; i++) {
      const employeesFromClass = []
      employeesFromClass[i] = new employee(employees[i])

      this.Name = employeesFromClass[i].name;
      this.id = employeesFromClass[i].id;
      this.role = employeesFromClass[i].role;
      this.email = employeesFromClass[i].email;
      console.log(this.Name);
    }
  }

  getName() {
    return this.Name;
  }
  getId() {
    return this.id;
  }
  getEmail() {
    return this.email;
  }
  getRole() {
    return this.role;
  }


}

module.exports = employee;
