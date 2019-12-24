--------------------------------------------------------------------------------------
-- Name	       : (Oracle Tutorial) Sample Database
-- Link	       : http://www.oracletutorial.com/oracle-sample-database/
-- Version     : 1.0
-- Last Updated: July-28-2017
-- Copyright   : Copyright � 2017 by www.oracletutorial.com. All Rights Reserved.
-- Notice      : Use this sample database for the educational purpose only.
--               Credit the site oracletutorial.com explitly in your materials that
--               use this sample database.
--------------------------------------------------------------------------------------
DROP TABLE ATP_USER.order_item;  
DROP TABLE ATP_USER.order_entry;
DROP TABLE ATP_USER.inventory;
DROP TABLE ATP_USER.product;
DROP TABLE ATP_USER.product_category;
DROP TABLE ATP_USER.warehouse;
DROP TABLE ATP_USER.employee;
DROP TABLE ATP_USER.contact;
DROP TABLE ATP_USER.customer;
DROP TABLE ATP_USER.location;
DROP TABLE ATP_USER.country;
DROP TABLE ATP_USER.region;

SELECT 'drop table ' || table_name || ';' FROM user_tables;
SELECT 'drop sequence ' || sequence_name || ';' FROM user_sequences;

-- Delete user, login as SYSTEM
--DROP USER ATP_USER CASCADE;

--SELECT * FROM USER_TABLES;
--SELECT * FROM  FROM USER_SEQUENCES;

-- Get count from all tables
SELECT COUNT(*) FROM REGION;
SELECT COUNT(*) FROM COUNTRY;
SELECT COUNT(*) FROM LOCATION;
SELECT COUNT(*) FROM WAREHOUSE;
SELECT COUNT(*) FROM EMPLOYEE;
SELECT COUNT(*) FROM PRODUCT_CATEGORY;
SELECT COUNT(*) FROM PRODUCT;
SELECT COUNT(*) FROM CUSTOMER;
SELECT COUNT(*) FROM CONTACT;
SELECT COUNT(*) FROM ORDER_ENTRY;
SELECT COUNT(*) FROM ORDER_ITEM;
SELECT COUNT(*) FROM INVENTORY;

-- Delete all Data from tables
DELETE FROM INVENTORY;
DELETE FROM ORDER_ITEM;
DELETE FROM ORDER_ENTRY;
DELETE FROM PRODUCT;
DELETE FROM CONTACT;
DELETE FROM WAREHOUSE;
DELETE FROM PRODUCT_CATEGORY;
DELETE FROM CUSTOMER;
DELETE FROM EMPLOYEE;
DELETE FROM COUNTRY;
DELETE FROM LOCATION;
DELETE FROM REGION;