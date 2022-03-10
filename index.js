const inquirer = require('inquirer');
const fs = require('fs');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const myTeam = require('./src/myTeam');

const workArray = [];

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