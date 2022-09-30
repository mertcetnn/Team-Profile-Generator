//Modules
const inquirer = require("inquirer");
const fs = require("fs");

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
  // manager
  const generateManager = (manager) => {
    return `<div class="col-4 mt-4">
      <div class="card h-100">
        <div class="card-header">
          <h3>${manager.name}</h3>
          <h4>Manager</h4>
          <i class="material-icons">content_paste</i>
        </div>

        <div class="card-body">
          <p class="id">ID:${manager.id}</p>
          <p class="email">
            Email: <a href="mailto:">${manager.mail}</a>
          </p>
          <p class="office">${manager.partnerGithub}</p>
        </div>
      </div>
    </div>;`;
  };
  // intern
  const generateIntern = (intern) => {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h3>${intern.name}</h3>
                <h4>Intern</h4><i class="material-icons">assignment_ind</i>
            </div>
            <div class="card-body">
                <p class="id">ID: ${intern.id}</p>
                <p class="email">Email:<a href="mailto:${intern.email}">${intern.email}</a></p>
                <p class="school">School: ${intern.school}</p>
            </div>
    </div>
</div>
    `;
  };

  // engineer
  const generateEngineer = (engineer) => {
    return `
    <div class="col-4 mt-4">
  <div class="card h-100">
      <div class="card-header">
          <h3>${engineer.name}</h3>
          <h4>Engineer</h4><i class="material-icons">laptop_mac</i>
      </div>

      <div class="card-body">
          <p class="id">ID: ${engineer.id}</p>
          <p class="email">Email: <a href="mailto:">${engineer.email}</a></p>
          <p class="github">Github: <a href="">${engineer.partnerGithub}</a></p>
      </div>

  </div>
</div>

`;
  };
  // turning to data each time
  generateTeam = (data) => {
    for (let i = 0; i < data.length; i++) {
      const employee = data[i];
      const position = employee.getRole();

      if (position === "Manager") {
        const managerCard = generateManager(employee);

        myTeamArr.push(managerCard);
      }

      if (position === "Engineer") {
        const engineerCard = generateEngineer(employee);

        myTeamArr.push(engineerCard);
      }

      if (position === "Intern") {
        const internCard = generateIntern(employee);

        myTeamArr.push(internCard);
      }
    }
    const partnersCards = myTeamArr.join("");
    const generateTeamPage = generateTeam(partnersCards);
    return generateTeamPage;
  };
  //generate html page
  const generateTeamPage = (partnersCards) => {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="stylesheet" href="./style.css">
    <script src="https://kit.fontawesome.com/c502137733.js"></script>
</head>
<header>
    <nav class="navbar" id="navbar">
        <span class="navbar-brand mb-0 h1 w-100 text-center" id="navbar-text">Team Profile</span>
    </nav>
</header>
<main>
    <div class="container">
        <div class="row justify-content-center" id="team-cards">
            <!--Team Cards-->
            ${partnersCards}


        </div>
    </div>
</main>

    
</body>
</html>






`;
    function writeFile(employeeData) {
      fs.writeFile("./dist/index.html", employeeData, (err) => {
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
    }
  };
};
