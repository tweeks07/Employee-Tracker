DROP DATABASE IF EXISTS employeeTracker_DB;
CREATE DATABASE employeeTracker_DB;
​
USE employeeTracker_DB;
​
CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
);
CREATE TABLE role (
  id INT NOT NULL AUTO_INCREMENT, PRIMARY KEY
  title VARCHAR(30) NOT NULL,
  salary DECIMAL(10,2) NOT NULL,
  department_id INT, 
  FOREIGN KEY (department_id) REFERENCES department(id)
);
CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT, PRIMARY KEY
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT, 
  manager_id INT,
  FOREIGN KEY (role_id) REFERENCES role(id),
  FOREIGN KEY (manager_id) REFERENCES
);