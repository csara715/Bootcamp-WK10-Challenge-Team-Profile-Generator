const inquirer = require("inquirer");
const Employee = require("./Employee");

// Manager constructor
class Manager extends Employee {
  constructor(employeeName, id, email, officeNumber) {
    super(employeeName, id, email);
    this.officeNumber = officeNumber;
  }

  getOfficeNumber() {
    return this.officeNumber;
  }

  getRole() {
    return "Manager";
  }
}

module.exports = Manager;
