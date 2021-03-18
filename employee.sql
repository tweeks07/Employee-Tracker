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
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL(10,2) NOT NULL,
  department_id INT, 
  FOREIGN KEY (department_id) REFERENCES department(id)
  PRIMARY KEY(id)
);
CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT, 
  manager_id INT,
  FOREIGN KEY (role_id) REFERENCES role(id),
  FOREIGN KEY (manager_id) REFERENCES employee(id)
  PRIMARY KEY(id)
);

USE employeeTracker_DB;
INSERT INTO department (name)
VALUES ("Management"), 
("HumanResources"), 
("Sales"), 
("Finance"),
("Marketing");

INSERT INTO role (title, salary, department_id)
VALUES ("Manager", 80000.00, 1), 
("Supervisor", 70000.00, 2), 
("SalesRepresentative", 60000.00, 3), 
("CustomerServiceRepresentative", 50000.00, 4), 
("Receptionist", 42000.00, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Seymore", "Butz", 1, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Phil", "McGroin", 2, NULL);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Oliver", "Closeoff", 3, NULL);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Hugh", "Jass", 4, NULL);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES("Mike", "Rotch", 5, NULL);
