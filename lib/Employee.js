const inquirer = require('inquirer');

class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
  // The first class is an Employee parent class with the following properties and methods:
  getName() {
    return this.name;
  }
  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getRole() {
    // Returns 'Employee'
    return 'Employee';
  }
};

module.exports = Employee;