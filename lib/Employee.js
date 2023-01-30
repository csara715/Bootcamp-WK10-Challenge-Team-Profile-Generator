const inquirer = require("inquirer");
// const Engineer = require("./Engineer");
// const Manager = require("./Manager");
// const Intern = require("./Intern");

class Employee {
  constructor(employeeName, id, email) {
    this.name = employeeName;
    this.id = id;
    this.email = email;
  }

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
    return "Employee";
  }
}

module.exports = Employee;
