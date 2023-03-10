const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generateHTML = require("./src/generateHTML");

const employeeList = [];

const questionTitle = [
  "the team manager's",
  "your engineer's",
  "your intern's",
];

//Array of employee questions
const employeeQuestions = [
  {
    type: "list",
    name: "employeeType",
    message: "Which type of team member would you like to add?",
    choices: ["Finish add members", "Engineer", "Intern"],
  },
  {
    type: "input",
    name: "employeeName",
    message: `What is ${questionTitle[1]} name?`,
    when: (answers) => {
      if (answers.employeeType === "Finish add members") {
        return false;
      } else if (answers.employeeType === "Engineer") {
        return true;
      }
    },
  },
  {
    type: "input",
    name: "id",
    message: `What is ${questionTitle[1]} id?`,
    when: (answers) => {
      if (answers.employeeType === "Engineer") {
        return true;
      }
    },
  },
  {
    type: "email",
    name: "email",
    message: `What is ${questionTitle[1]} email?`,
    when: (answers) => {
      if (answers.employeeType === "Engineer") {
        return true;
      }
    },
  },
  {
    type: "input",
    name: "gitHub",
    message: `What is ${questionTitle[1]} gitHub username?`,
    when: (answers) => {
      if (answers.employeeType === "Engineer") {
        return true;
      }
    },
  },
  {
    type: "input",
    name: "employeeName",
    message: `What is ${questionTitle[2]} name?`,
    when: (answers) => {
      if (answers.employeeType === "Finish add members") {
        return false;
      } else if (answers.employeeType === "Intern") {
        return true;
      }
    },
  },
  {
    type: "input",
    name: "id",
    message: `What is ${questionTitle[2]} id?`,
    when: (answers) => {
      if (answers.employeeType === "Intern") {
        return true;
      }
    },
  },
  {
    type: "email",
    name: "email",
    message: `What is ${questionTitle[2]} email?`,
    when: (answers) => {
      if (answers.employeeType === "Intern") {
        return true;
      }
    },
  },
  {
    type: "input",
    name: "school",
    message: `What is ${questionTitle[2]} school?`,
    when: (answers) => {
      if (answers.employeeType === "Intern") {
        return true;
      }
    },
  },
];

// Array of Manager questions
const managerQuestions = [
  {
    type: "input",
    name: "employeeName",
    message: `What is ${questionTitle[0]} name?`,
  },
  {
    type: "input",
    name: "id",
    message: `What is ${questionTitle[0]} id?`,
  },
  {
    type: "email",
    name: "email",
    message: `What is ${questionTitle[0]} email?`,
  },
  {
    type: "input",
    name: "phoneNumber",
    message: `What is ${questionTitle[0]} office phone number?`,
  },
];

async function init() {
  console.log("\nWelcome to the team generator!");
  console.log("Use `npm run reset` to reset the dist/ folder.\n");
  console.log("Please build your team!!!\n");

  // inquirer prompt for manager information
  inquirer.prompt(managerQuestions).then((answers) => {
    const manager = new Manager(
      answers.employeeName,
      answers.id,
      answers.email,
      answers.phoneNumber
    );
    // Add manager to employee list
    employeeList.push(manager);

    // Inquirer prompt for employee questions with fork for engineer and intern
    inquirer.prompt(employeeQuestions).then((answers) => {
      const employee = new Employee(answers);
      if (answers.employeeType === "Finish add members") {
        console.log("I don't want to add anymore team members.");

        const htmlPageContent = generateHTML(employeeList);

        fs.writeFile("./dist/index.html", htmlPageContent, (err) =>
          err
            ? console.log(err)
            : console.log("Successfully created index.html!")
        );
        return false;
      } else if (answers.employeeType === "Intern") {
        const intern = new Intern(
          answers.employeeName,
          answers.id,
          answers.email,
          answers.school
        );
        employeeList.push(intern);
      } else if (answers.employeeType === "Engineer") {
        const engineer = new Engineer(
          answers.employeeName,
          answers.id,
          answers.email,
          answers.gitHub
        );
        employeeList.push(engineer);
      }

      inquirer.prompt(employeeQuestions).then((answers) => {
        if (answers.employeeType === "Engineer") {
          const engineer = new Engineer(
            answers.employeeName,
            answers.id,
            answers.email,
            answers.gitHub
          );
          // Push engineer to employee list
          employeeList.push(engineer);
        } else if (answers.employeeType === "Intern") {
          const intern = new Intern(
            answers.employeeName,
            answers.id,
            answers.email,
            answers.school
          );
          // Push intern to employee list
          employeeList.push(intern);
          // Call generateHTML function and create html file when user is finished inputing employees
        } else if (answers.employeeType === "Finish add members") {
          console.log("I don't want to add anymore team members.");

          const htmlPageContent = generateHTML(employeeList);

          fs.writeFile("./dist/index.html", htmlPageContent, (err) =>
            err
              ? console.log(err)
              : console.log("Successfully created index.html!")
          );
        }
        // Call recursive function to continue prompting for employee information until user is finished
        getEmployee(answers.employeeType);
      });
    });
  });
}

//Recursive asyn/await function to loop through employee inquirer prompt until user is finished
async function getEmployee(employeeType) {
  while (employeeType !== "Finish add members") {
    await inquirer.prompt(employeeQuestions).then((answers) => {
      employeeType = answers.employeeType;
      if (answers.employeeType === "Engineer") {
        const engineer = new Engineer(
          answers.employeeName,
          answers.id,
          answers.email,
          answers.gitHub
        );
        employeeList.push(engineer);
      } else if (answers.employeeType === "Intern") {
        const intern = new Intern(
          answers.employeeName,
          answers.id,
          answers.email,
          answers.school
        );
        employeeList.push(intern);
      } else if (answers.employeeType === "Finish add members") {
        console.log("I don't want to add anymore team members.");

        const htmlPageContent = generateHTML(employeeList);

        fs.writeFile("./dist/index.html", htmlPageContent, (err) =>
          err
            ? console.log(err)
            : console.log("Successfully created index.html!")
        );
      }
    });
  }
}

init();
