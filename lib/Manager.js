const Employee = require('../lib/Employee');

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);

    this.officeNumber = officeNumber;
  }

  getRole() {
    // Overridden to return 'Manager'
    return 'Manager';
  }
}

module.exports = Manager;