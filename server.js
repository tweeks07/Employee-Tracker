const mysql = require('mysql');
const inquirer = require('inquirer');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'EmployeeTracker'
});
connection.connect((err) => {
  if (err) throw err;
  console.log(`connected as id ${connection.threadId}\n`);
  startPrompt();
});

// function which prompts the user for what action they should take
function startPrompt () {
    inquirer
      .prompt({
        name: 'start',
        type: 'list',
        message: 'Welcome! What would you like to do?',
        choices: ['View all employees',
                  'View department',
                  'View role',
                  'Add employee',
                  'Add department',
                  'Add role',
                  'Update employee role',
                  'Remove employee',
                  'Remove role',
                  'EXIT'
    ],
      })
      .then(function (result) {
        // based on their answer, switch statement
        switch(res.start) {
          case 'View All Employees':
              viewEmployees();
              break;
          case 'View Department':
              viewDepartment();
              break;
          case 'View Role':
              viewRole();
              break;
          case 'Add Employee':
              addEmployee();
              break;
          case 'Add Department':
              addDepartment();
              break;
          case 'Add Role':
              addRole();
              break;
          case 'Update Employee Role':
              updateEmployeeRole();
              break;
          case 'Remove Department':
              removeDepartment();
              break;
          case 'Remove Role':
              removeRole();
              break;
          case 'EXIT':
              exitPrompt();
              break;
          }
      })
  }

  const viewEmployees = () => {
    connection.query()

  }
