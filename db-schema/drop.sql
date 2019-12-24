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
DROP TABLE ATP_USER.order_items;  
DROP TABLE ATP_USER.orders;
DROP TABLE ATP_USER.inventories;
DROP TABLE ATP_USER.products;
DROP TABLE ATP_USER.product_categories;
DROP TABLE ATP_USER.warehouses;
DROP TABLE ATP_USER.employees;
DROP TABLE ATP_USER.contacts;
DROP TABLE ATP_USER.customers;
DROP TABLE ATP_USER.locations;
DROP TABLE ATP_USER.countries;
DROP TABLE ATP_USER.regions;

SELECT 'drop table ' || table_name || ';' FROM user_tables;
SELECT 'drop sequence ' || sequence_name || ';' FROM user_sequences;

DROP USER ATP_USER CASCADE;
