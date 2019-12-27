# Creates a sample schema in existing empty Oracle database

### Steps if Oracle Database is running locally in Docker Container
1. Install VS Code plugin `Oracle Developer Tools for VS Code`
2. Create new `Basic` oracle connection. Conneciton Type: Basic, provide host, port, Service name, username and password
3. Create database user:                  `create_user.sql`
4. Create schema and add some fake data:  `schema.sql`, `data.sql`
5. To drop everything run sql script:     `drop.sql`

### Steps if Oracle Database is running in Oracle Cloud (ATP - Autonomous Transaction Processing)
1. Install VS Code plugin `Oracle Developer Tools for VS Code`
2. Create new `TNS Alias` oracle connection Conneciton Type: TNS Alias, TNS Admin location. TNS Alias, Use Wallet File
3. Create database user:                  `create_user_oracle_cloud.sql`
4. Create schema and add some fake data:  `schema.sql`, `data.sql`
5. To drop everything run sql script:     `drop.sql`

### Credit / Prior Art
-  http://www.oracletutorial.com/oracle-sample-database/
