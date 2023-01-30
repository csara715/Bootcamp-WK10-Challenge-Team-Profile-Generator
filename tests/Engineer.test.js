const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  describe("Engineer constructor", () => {
    it("should create an object with an employee name, id, email, and GitHub username", () => {
      const engineer = new Engineer(
        "Mary",
        "2",
        "mary@gmail.com",
        "maryGitHub"
      );

      expect(engineer.getName()).toBe("Mary");
      expect(engineer.getId()).toBe("2");
      expect(engineer.getEmail()).toBe("mary@gmail.com");
      expect(engineer.getGithub()).toBe("maryGitHub");
    });
  });
  describe("getGithub", () => {
    it("should return username of the engineer", () => {
      const engineer = new Engineer(
        "Mary",
        "2",
        "mary@gmail.com",
        "maryGitHub"
      );
      expect(engineer.getGithub()).toEqual("maryGitHub");
    });
  });

  describe("getRole", () => {
    it("should return that the employee is an engineer", () => {
      const engineer = new Engineer(
        "Mary",
        "2",
        "mary@gmail.com",
        "maryGitHub"
      );
      expect(engineer.getRole()).toEqual("Engineer");
    });
  });
});
