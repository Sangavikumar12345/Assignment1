DELIMITER //

CREATE PROCEDURE CalculateBill(
    IN p_price DECIMAL(10,2),
    IN p_quantity INT,
    OUT total_bill DECIMAL(10,2)
)
BEGIN
    SET total_bill = p_price * p_quantity;
END //

DELIMITER ;
CALL CalculateBill(100, 5, @bill);
SELECT @bill;
