DELIMITER //

CREATE PROCEDURE LogUserLogin(IN p_user_id INT)
BEGIN
    INSERT INTO login_log (user_id, login_time)
    VALUES (p_user_id, NOW());
END //

DELIMITER ;
CALL LogUserLogin(10);

