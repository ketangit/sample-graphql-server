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

-- create new user
CREATE USER ATP_USER IDENTIFIED BY <choose-secure-password>;

-- grant priviledges if using Oracle Cloud (ATP)
GRANT DWROLE TO ATP_USER;
GRANT CREATE SESSION TO ATP_USER;
GRANT UNLIMITED TABLESPACE TO ATP_USER;

BEGIN
   ORDS_ADMIN.ENABLE_SCHEMA(
     p_enabled => TRUE,
     p_schema => 'ATP_USER',
     p_url_mapping_type => 'BASE_PATH',
     p_url_mapping_pattern => 'user-schema',
     p_auto_rest_auth => TRUE
   );
   COMMIT;
END;
