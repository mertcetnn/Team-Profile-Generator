const Employee = require("./employe");

class Engineer extends Employee {
  constructor(name, id, email) {
    super(name, id, email);

    this.github = github;
  }
  // returning github from input
  getGithub() {
    return this.github;
  }

  // override employee role to engineer
  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;
