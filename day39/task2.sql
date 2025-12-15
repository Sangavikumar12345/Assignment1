DELIMITER //

CREATE PROCEDURE GetEmployeesByDept(IN p_dept_id INT)
BEGIN
    SELECT *
    FROM employees
    WHERE department_id = p_dept_id;
END //

DELIMITER ;
CALL GetEmployeesByDept(2);
