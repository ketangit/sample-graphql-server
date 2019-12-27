-- create new user, login as SYSTEM
CREATE USER ATP_USER IDENTIFIED BY <choose-secure-password>;

-- grant priviledges, login as SYSTEM
GRANT CONNECT, RESOURCE, DBA TO ATP_USER;
