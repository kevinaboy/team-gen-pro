const Employee = require('../lib/Employee');

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }
  getGithub() {
    return `https://github.com/${this.github}`;
  }

  getRole() {
    // Overridden to return 'Engineer'
    return 'Engineer';
  }
}

module.exports = Engineer;