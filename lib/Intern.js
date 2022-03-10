const Employee = require('../lib/Employee');

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.github = github;
  }
  getSchool() {
    return `School: ${this.school} `;
  }

  getRole() {
    // Overridden to return 'Intern'
    return 'Intern';
  }
}

module.exports = Intern;