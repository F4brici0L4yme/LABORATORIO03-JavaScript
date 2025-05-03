CREATE DATABASE company;

USE company;

CREATE TABLE customers (
    customer_id VARCHAR(10) PRIMARY KEY,
    company_name VARCHAR(100),
    contact_name VARCHAR(100),
    address VARCHAR(255),
    city VARCHAR(100),
    country VARCHAR(100),
    postal_code VARCHAR(20);
);

INSERT INTO customers VALUES
('ALFKI', 'Alfreds Futterkiste', 'Maria Anders', 'Obere Str. 57', 'Berlin', 'Germany'),
('NORTS', 'North/South', 'Simon Crowther', 'South House 300 Queensbridge', 'London', 'UK'),
('WOLZA', 'Wolski Zajazd', 'Zbyszek Piestrzeniewicz', 'ul. Filtrowa 68', 'Warszawa', 'Poland');

UPDATE customers SET postal_code = '12209' WHERE customer_id = 'ALFKI';
UPDATE customers SET postal_code = 'SW7 1RZ' WHERE customer_id = 'NORTS';
UPDATE customers SET postal_code = '01-012' WHERE customer_id = 'WOLZA';