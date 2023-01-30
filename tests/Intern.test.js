const Intern = require("../lib/Intern");

describe("Intern", () => {
  describe("Intern constructor", () => {
    it("should create an object with an employee name, id, email, and school", () => {
      const intern = new Intern("Mary", "2", "mary@gmail.com", "DU");

      expect(intern.getName()).toBe("Mary");
      expect(intern.getId()).toBe("2");
      expect(intern.getEmail()).toBe("mary@gmail.com");
      expect(intern.getSchool()).toBe("DU");
    });
  });

  describe("getSchool", () => {
    it("should return the school the intern is attending", () => {
      const intern = new Intern("Mary", "2", "mary@gmail.com", "DU");
      expect(intern.getSchool()).toEqual("DU");
    });
  });

  describe("getRole", () => {
    it("should return that the employee is an intern", () => {
      const intern = new Intern("Mary", "2", "mary@gmail.com", "DU");
      expect(intern.getRole()).toEqual("Intern");
    });
  });
});
