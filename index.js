// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const myTeam = require('./src/myTeam');
const { profile } = require('console');
const { assertNewExpression } = require('babel-types');

// Create an array of questions for user input
const questionsArray = [];

// Prompt to enter the team manager’s name, employee ID, email address, and office number
const addManager = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Welcome, Team Manager! Please enter your name:',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your name:');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'id',
      message: 'What is your employee ID?',
      validate: idInput => {
        if (isNaN(idInput)) { // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN
          console.log('Try again. Please enter your employee ID:');
          return false;
        } else {
          return true;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your work email address?',
      validate: emailInput => {
        if (emailInput) {
          return true;
        } else {
          console.log('Your entry is invalid. Please enter your work email address:');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'officeNumber',
      message: 'What is your office number?',
      validate: officeNumberInput => {
        if (isNaN(officeNumberInput)) {
          console.log('Your entry is invalid. Please enter your office number:');
          return false;
        } else {
          return true;
        }
      }
    }
  ])
    .then(managerInput => {
      const { name, id, email, officeNumber } = managerInput;
      const manager = new Manager(name, id, email, officeNumber);

      questionsArray.push(manager);
      console.log(manager);
    })
};

// Manager portion complete
// Menu prompt to add an engineer or an intern, or to finish building my team

const addEmployee = () => {
  console.log(`
     Next, to add an employee answer the prompts.
     ============================================
     `
  );
  return inquirer.prompt([
    {
      type: 'list',
      name: 'role',
      message: "Select your employee's role",
      choices: ['Engineer', 'Intern']
    },
    {
      type: 'input',
      name: 'name',
      message: "What is your employee's name.",
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log("Your entry is invalid. Please enter your employee's name.");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'id',
      message: "What is your employee's id?",
      validate: idInput => {
        if (isNaN(idInput)) {
          console.log("Please enter the employee's ID.");
          return false;
        } else {
          return true;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: "What is your employee's email?",
      validate: emailInput => {
        if (emailInput) {
          return true;
        } else {
          console.log("Please enter your employee's email.");
          return false;
        }
      }
    },
    {
      // Prompt to enter GitHub username only for Engineer
      type: 'input',
      name: 'github',
      message: "What is your Engineer's GitHub username?",
      when: (input) => input.role === "Engineer",
      validate: githubInput => {
        if (githubInput) {
          return true;
        } else {
          console.log("Please enter the Engineer's GitHub username.")
        }
      }
    },
    {
      // Prompt to enter school name only for Intern
      type: 'input',
      name: 'school',
      message: "Please enter your Intern's school name.",
      when: (input) => input.role === "Intern",
      validate: schoolInput => {
        if (schoolInput) {
          return true;
        } else {
          console.log("Please enter your Intern's school name.")
        }
      }
    },
    // Prompt to 
    {
      type: 'confirm',
      name: 'addAnotherEmployee',
      message: "Would you like to add another employee to your profile?",
    }]);
  if (answer.addAnotherEmployee === true) {
    then(employeeData => {
      let { name, id, email, role, github, school, confirmEmployee } = employeeData;
      let employee;

      if (role === "Engineer") {
        employee = new Engineer(name, id, email, github);
        console.log(employee);

      } else if (role === "Intern") {
        employee = new Intern(name, id, email, school);
        console.log(employee);
      }

      questionsArray.push(employee);


      if (confirmEmployee) {
        return addEmployee(questionsArray);
      } else {
        return questionsArray;
      }
    })
  };