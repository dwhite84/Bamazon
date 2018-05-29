DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;
USE bamazon_db;

CREATE TABLE products (
    id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(30) NOT NULL,
    department_name VARCHAR(30) NOT NULL,
    price DECIMAL (10,4),
    stock_quantity INTEGER(4) NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO products (Product_name, Department_name, Price, stock_quantity) Values ("Soap", "Hygiene", 1.89, 94);
INSERT INTO products (Product_name, Department_name, Price, stock_quantity) Values ("Water bottle", "Sports", 11.49, 204);
INSERT INTO products (Product_name, Department_name, Price, stock_quantity) Values ("Towels", "Bathroom", 62.29, 34);
INSERT INTO products (Product_name, Department_name, Price, stock_quantity) Values ("Bell's Two Hearted", "Beer", 9.89, 13);
INSERT INTO products (Product_name, Department_name, Price, stock_quantity) Values ("Seventh Son American Strong", "Beer", 9.89, 8);
INSERT INTO products (Product_name, Department_name, Price, stock_quantity) Values ("Suit Case", "Travel", 129.89, 6);
INSERT INTO products (Product_name, Department_name, Price, stock_quantity) Values ("Map", "Travel", 11.89, 9);
INSERT INTO products (Product_name, Department_name, Price, stock_quantity) Values ("Toliet Paper", "Bathroom", 6.99, 90);
INSERT INTO products (Product_name, Department_name, Price, stock_quantity) Values ("Chair", "Dining Room", 71.99, 43);
INSERT INTO products (Product_name, Department_name, Price, stock_quantity) Values ("Couch", "Living Room", 821.00, 7);
INSERT INTO products (Product_name, Department_name, Price, stock_quantity) Values ("Coffee", "Food", 1.89, 144);