SELECT 
    product_name,
    fn_total_price(quantity, price) AS total_price
FROM order_details;
