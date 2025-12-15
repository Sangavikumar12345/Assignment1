DELIMITER //

CREATE PROCEDURE GetMonthlySales(
    IN p_month INT,
    IN p_year INT,
    OUT total_sales DECIMAL(10,2)
)
BEGIN
    SELECT SUM(sale_amount)
    INTO total_sales
    FROM sales
    WHERE MONTH(sale_date) = p_month
      AND YEAR(sale_date) = p_year;
END //

DELIMITER ;
CALL GetMonthlySales(8, 2025, @sales);
SELECT @sales;
