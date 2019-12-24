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
--------------------------------------------------------------------
-- execute the following statements to create a user name ATP_USER and
-- grant priviledges
--------------------------------------------------------------------

-- create new user, login as SYSTEM
CREATE USER ATP_USER IDENTIFIED BY <choose-secure-password>;

-- grant priviledges, login as SYSTEM
GRANT CONNECT, RESOURCE, DBA TO ATP_USER;
