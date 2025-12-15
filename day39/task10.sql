DELIMITER //

CREATE PROCEDURE IncreaseProductPrice(
    IN p_percentage DECIMAL(5,2)
)
BEGIN
    UPDATE products
    SET price = price + (price * p_percentage / 100);
END //

DELIMITER ;
CALL IncreaseProductPrice(10);
