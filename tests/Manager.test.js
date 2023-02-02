const Manager = require("../lib/Manager");

// Test that a manager object is created with the following properties and methods
describe("Manager", () => {
  describe("Manager constructor", () => {
    it("should create an object with an employee name, id, email, and office number", () => {
      const manager = new Manager(
        "Mary",
        "2",
        "mary@gmail.com",
        "(303)333-3333"
      );
      expect(manager.getName()).toBe("Mary");
      expect(manager.getId()).toBe("2");
      expect(manager.getEmail()).toBe("mary@gmail.com");
      expect(manager.getOfficeNumber()).toBe("(303)333-3333");
    });
  });
});
describe("getOfficeNumber", () => {
  it("should return office phone number of the manager", () => {
    const manager = new Manager("Mary", "2", "mary@gmail.com", "(303)333-3333");
    expect(manager.getOfficeNumber()).toEqual("(303)333-3333");
  });
});

describe("getRole", () => {
  it("should return that the employee is a manager", () => {
    const manager = new Manager("Mary", "2", "mary@gmail.com", "(303)333-3333");
    expect(manager.getRole()).toEqual("Manager");
  });
});
