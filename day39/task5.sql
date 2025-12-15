DELIMITER //

CREATE PROCEDURE UpdateStudentPhone(
    IN p_student_id INT,
    IN p_phone VARCHAR(15)
)
BEGIN
    UPDATE students
    SET phone = p_phone
    WHERE student_id = p_student_id;
END //

DELIMITER ;
CALL UpdateStudentPhone(1, '9876543210');
