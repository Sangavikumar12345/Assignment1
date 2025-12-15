DELIMITER //

CREATE PROCEDURE GetProductDetails(IN p_product_id INT)
BEGIN
    SELECT *
    FROM products
    WHERE product_id = p_product_id;
END //

DELIMITER ;

CALL GetProductDetails(101);
