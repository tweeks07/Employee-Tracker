USE employeeTracker_DB;
--Department--
INSERT INTO department (name)
VALUES (Management), (Human Resources), (Sales), (Finance);

--Role--
INSERT INTO role (title, salary, department_id)
VALUES (Manager, 75000.00, 1), (Sales Representative, 60000.00, 2), (Customer Service Representative, 50000.00, 3), (Receptionist, 42000.00, 4);

--Employee--
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES (Seymore, Butz, 1, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
(Phil, McGroin, 2, NULL);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
(Oliver, Closeoff, 3, NULL);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
(Hugh, Jass, 4, NULL);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
(Mike, Rotch, 5, NULL);
