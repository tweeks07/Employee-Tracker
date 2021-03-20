const mysql = require("mysql");
const inquirer = require("inquirer");
require("console.table");

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'employeeTracker_DB'
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
        choices: ['View employee',
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
      .then(function (res) {
        // based on their answer, switch statement
        switch(res.start) {
          case 'View Employee':
              viewEmployee();
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
          case 'Remove Employee':
              removeEmployee();
              break;
          case 'Remove Role':
              removeRole();
              break;
          case 'EXIT':
              exitPrompt();
              break;
          }
      });
  }

  function viewEmployee() {
    connection.query("SELECT * FROM employee", function (err, res) {
      if (err) throw err;
      console.table(res);
      startPrompt();
    });
    
  }
 
  function addDepartment () {
  

  }
  
  function addRole () {

  }

  const viewDepartment = () => {
    connection.query('SELECT * FROM department', function (err, res) {
      if (err) throw err;
      console.table(res);
      startPrompt();
    });
  }

  const viewRole = () => {
    connection.query('SELECT * FROM role', function (err, res) {
      if (err) throw err;
      console.table(res);
      startPrompt();
    });
  }

  const updateEmployeeRole = () => {
    connection.query()
  }

  function exitPrompt() {
    connection.end();
    process.exit();
  };
