// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const myTeam = require('./src/myTeam');

// Create an array of questions for user input
const workArray = [];

// Prompt to enter the team manager’s name, employee ID, email address, and office number
const addManager = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Welcome, Team Manager! Please enter your name.',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter your name.");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'id',
      message: 'Please enter your employee ID.',
      validate: idInput => {
        if (isNaN(idInput)) { // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN
          console.log("Try again. Please enter your employee ID.");
          return false;
        } else {
          return true;
        }
      }
    },
