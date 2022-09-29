//Modules
const inquirer = require("inquirer");
const fs = require("fs");
const generate = require("./src/generate");

//TEAM PROFILES//

const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Employee = require("./lib/employe");

const myTeamArr = [];

const createManager = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the manager name?",
        validate: (managerName) => {
          if (managerName) {
            return true;
          } else {
            console.log("Dont forget to add your name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "mail",
        message: "What is the manager mail?",
        validate: (managersMail) => {
          if (managersMail) {
            return true;
          } else {
            console.log("Dont be unreachable!, add email.");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "What is your ID?",
        validate: (managerId) => {
          if (managerId) {
            return true;
          } else {
            console.log("We all marked up , its okey. ADD ID!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "officeNumber",
        message: "Please enter the manager's office number",
        validate: (officeNumbers) => {
          if (officeNumbers) {
            return true;
          } else {
            console.log("Please enter an office number!");
            return false;
          }
        },
      },
    ])

    .then((managerInputs) => {
      const { name, id, mail, officeNumber } = managerInputs;
      const manager = new Manager(name, id, mail, officeNumber);
      myTeamArr.push(manager);
      console.log(manager);
      addEmploye();
    });
};

const addEmploye = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "position",
        message: "Choose employees postition.",
        choices: ["Engineer", "Intern"],
      },
      {
        type: "input",
        name: "name",
        message: "What is the company partners name?",
        validate: (partnerName) => {
          if (partnerName) {
            return true;
          } else {
            console.log("Dont forget to add partner name");
          }
        },
      },

      {
        type: "input",
        name: "id",
        message: "What is the partners ID!",
        validate: (partnerId) => {
          if (partnerId) {
            return true;
          } else {
            console.log("Please add Partners ID.");
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "Please enter the employee's email.",
        validate: (email) => {
          if (email) {
            return true;
          } else {
            console.log("Please enter an email!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "partnerGithub",
        message: "Partner's Github username.",
        when: (input) => input.position === "Engineer",
        validate: (partnerGithub) => {
          if (partnerGithub) {
            return true;
          } else {
            console.log("Please  enter the partners Github!");
          }
        },
      },
      {
        type: "input",
        name: "internSchool",
        message: "Please enter the intern's school",
        when: (input) => input.position === "Intern",
        validate: (internSchool) => {
          if (internSchool) {
            return true;
          } else {
            console.log("Please enter the intern's school!");
          }
        },
      },
      {
        type: "confirm",
        name: "confirmAddEmp",
        message: "Would you like to add more team members?",
        default: false,
      },
    ])
    .then((employeeData) => {
      let employee;
      if (employeeData.position === "Engineer") {
        console.log(employeeData.partnerGithub);
        employee = new Engineer(
          employeeData.name,
          employeeData.id,
          employeeData.email,
          employeeData.partnerGithub
        );

        console.log(employee);
      } else if (employeeData.position === "Intern") {
        employee = new Intern(
          employeeData.name,
          employeeData.id,
          employeeData.email,
          employeeData.internSchool
        );

        console.log(employee);
      }

      myTeamArr.push(employee);

      if (employeeData.confirmAddEmp) {
        return addEmploye(myTeamArr);
      } else {
        console.log(myTeamArr);
      }
    });
};
// function to generate HTML page file using file system

createManager();
const generateTeam = (myTeamArr) => {
  const generateManager = (manager) => {
    return;
    `<div class="col-4 mt-4">
      <div class="card h-100">
        <div class="card-header">
          <h3>${manager.name}</h3>
          <h4>Manager</h4>
          <i class="material-icons">content_paste</i>
        </div>

        <div class="card-body">
          <p class="id">ID:${manager.id}</p>
          <p class="email">
            Email: <a href="mailto:"></a>
          </p>
          <p class="office"></p>
        </div>
      </div>
    </div>;`;
  };
};
const writeFile = (data) => {
  fs.writeFile("./dist/index.html", data, (err) => {
    // if there is an error
    if (err) {
      console.log(err);
      return;
    } else {
      console.log(
        "Your team profile has been successfully created! Please check out the index.html"
      );
    }
  });
};
