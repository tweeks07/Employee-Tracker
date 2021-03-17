const mysql = require('mysql');
const inquirer = require('inquirer');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'EmployeeTracker'
});

// function which prompts the user for what action they should take
function startPromt () {
    inquirer
      .prompt({
        name: 'start',
        type: 'list',
        message: 'What would you like to do?',
        choices: ['View all employees',
                  'View all employees by department',
                  'View all employees by manager',
                  'Add employee',
                  'Remove employee',
                  'Update employee role',
                  'Update manager role',
                  'View all roles',
                  'EXIT'
    ],
      })
      .then((answer) => {
        // based on their answer, either call the bid or the post functions
        if (answer.postOrBid === 'POST') {
          postAuction();
        } else if (answer.postOrBid === 'BID') {
          bidAuction();
        } else {
          connection.end();
        }
      });
  };