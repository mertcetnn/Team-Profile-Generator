//Modules
const inquirer = require("inquirer");
const fs = require("fs");
const generate = require("./src/generate");

//TEAM PROFILES//

const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

const myTeamArr = [];

const createManager = () => {
  return inquirer
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
      const { name, id, email, officeNumber } = managerInputs;
      const manager = new Manager(name, id, email, officeNumber);
      myTeamArr.push(manager);
      console.log(manager);
    });
};

const addEmploye = () => {
  return inquirer.prompt([
    {
      type: "list",
      name: "position",
      message: "Choose employees postition.",
      chosices: ["Enginer", "Intern"],
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
        valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
        if (valid) {
          return true;
        } else {
          console.log("Please enter an email!");
          return false;
        }
      },
    },
  ]);
};
