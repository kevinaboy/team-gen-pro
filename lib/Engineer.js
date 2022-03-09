const Employee = require('../lib/Employee');

class Engineer extends Employee {
  constructor(namde, id, email, github) {
    super(name, id, email);
    this.github = github;
  }
  getGithub() {
    return `https://github.com/${this.github}`;
  }

  getRole() {
    return 'Engineer';
  }
}

module.exports = Engineer;