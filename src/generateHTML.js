const inquirer = require("inquirer");
const fs = require("fs");

let employeeCards = "";

const generateHTML = (employeeList) => {
  const length = Object.keys(employeeList).length;
  console.log(employeeList[1].getRole());
  console.log(employeeList[2].getName());

  for (let i = 0; i < length; i++) {
    let role = employeeList[i].getRole();
    let employeeName = employeeList[i].getName();
    let id = employeeList[i].getId();
    let email = employeeList[i].getEmail();
    if (role === "Manager") {
      let officeNumber = employeeList[i].getOfficeNumber();
      let managerCard = `<div class="card">
        <div class="card-header">
        <h2>${employeeName}</h2>
        <h3><i class="fa fa-coffee" aria-hidden="true"></i> ${role}</h3>
      </div>
      <div class="card-body">
        <row class="row">
        <p>Id: ${id}</p>
        </row>
        <row class="row">
        <p>Email: <a href= "csara@gmail.com">${email}</a></p>
        </row>
        <row class="row">
        <p>Number: ${officeNumber}</p>
        </row>
      </div>
      </div>`;

      employeeCards += managerCard;
    }

    if (role === "Engineer") {
      let github = employeeList[i].getGithub();
      let engineerCard = `<div class="card">
      <div class="card-header">
        <h2>${employeeName}</h2>
        <h3><i class="fa fa-laptop" aria-hidden="true"></i> ${role}</h3>
      </div>
      <div class="card-body">
        <row class="row">
        <p>Id: ${id}</p>
        </row>
        <row class="row">
        <p><a href= "${email}">Email: ${email}</a></p>
        </row>
        <row class="row">
        <p>GitHub: <link href= "${github}">${github}</link></p>
        </row>
      </div>
      </div>`;

      employeeCards += engineerCard;
    }

    if (role === "Intern") {
      let school = employeeList[i].getSchool();

      let internCard = `<div class="card">
      <div class="card-header">
        <h2>${employeeName}</h2>
        <h3><i class="fa fa-graduation-cap" aria-hidden="true"></i> ${role}</h3>
      </div>
      <div class="card-body">
        <row class="row">
        <p>Id: ${id}</p>
        </row>
        <row class="row">
        <p>Email: <a href= "${email}">${email}</a></p>
        </row>
        <row class="row">
        <p>School: ${school}</p>
        </row>
      </div>
      </div>`;

      employeeCards += internCard;
    }
  }

  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    />
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
      integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
      crossorigin="anonymous"
    />
    <link
      href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="./style.css" />
    <title>My Team</title>
  </head>

  <body>
    <header class="jumbotron">
      <h1>Meet My Awesome Team!</h1>
    </header>
    <main class="justify-content-center">${employeeCards}</main>
</body>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.1/umd/popper.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/js/bootstrap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.27.0/moment.min.js"></script>
    <script src="https://code.jquery.com/ui/1.12.0/jquery-ui.min.js"></script>
</html>`;
};

module.exports = generateHTML;
