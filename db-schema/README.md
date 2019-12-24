# Creates a sample schema in existing empty Oracle database

### Steps to run this project locally:
1.  Install VS Code plugin `Oracle Developer Tools for VS Code`
2a. Create new `Basic` oracle connection (running in container):  Conneciton Type: Basic, provide host, port, Service name, username and password
2b: Create new `TNS Alias` oracle connection (running in Oracle Cloud):  Conneciton Type: TNS Alias, TNS Admin location. TNS Alias, Use Wallet File
3a. Create user (running in container):     `create_user.sql`
3b. Create user (running in Oracle Cloud):  `create_user_oracle_cloud.sql`
4.  Create schema and add some fake data:   `schema.sql`, `data.sql`
4.  To drop everything run sql script:      `drop.sql`

### Credit / Prior Art
-  http://www.oracletutorial.com/oracle-sample-database/
