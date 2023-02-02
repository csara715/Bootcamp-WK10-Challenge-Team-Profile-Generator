const Employee = require("../lib/Employee");
// Test that an employee object is created with the following properties and methods
describe("Employee", () => {
  describe("Employee constructor", () => {
    it("should create an object with an employee name, id and email", () => {
      const employee = new Employee("Mary", "2", "mary@gmail.com");

      expect(employee.getName()).toBe("Mary");
      expect(employee.getId()).toBe("2");
      expect(employee.getEmail()).toBe("mary@gmail.com");
    });
  });
  describe("getName", () => {
    it("should return the name of the employee", () => {
      const employee = new Employee("Mary", "2", "mary@gmail.com");
      expect(employee.getName()).toEqual("Mary");
    });
  });

  describe("getId", () => {
    it("should return the id of the employee", () => {
      const employee = new Employee("Mary", "2", "mary@gmail.com");
      expect(employee.getId()).toEqual("2");
    });
  });
  describe("getEmail", () => {
    it("should return the name of the employee", () => {
      const employee = new Employee("Mary", "2", "mary@gmail.com");
      expect(employee.getEmail()).toEqual("mary@gmail.com");
    });
  });
  describe("getRole", () => {
    it("should return that this person is an employee", () => {
      const employee = new Employee("Mary", "2", "mary@gmail.com");
      expect(employee.getRole()).toEqual("Employee");
    });
  });
});
