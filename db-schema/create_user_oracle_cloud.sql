-- create new user, login as ADMIN 
CREATE USER ATP_USER IDENTIFIED BY <choose-secure-password>;

-- grant priviledges, login as ADMIN
GRANT DWROLE TO ATP_USER;
GRANT CREATE SESSION TO ATP_USER;

-- add the privileges to load data, login as ADMIN
BEGIN
	DBMS_CLOUD_ADMIN.GRANT_TABLESPACE_QUOTA(
           username => 'ATP_USER', 
           tablespace_quota => '1G'
	);
END;

-- Provide SQL Developer Web Access, login as ADMIN
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
