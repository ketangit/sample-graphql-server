# Sample Typescript Nodejs Server application using GraphQL and Vesper framework

### Steps to create this project:

```
  npm install -g typeorm
  npm install -g vesper
  npm install --save-dev typescript tslint tslint-config-prettier copyfiles
  npm install --save-dev @types/node @types/ws @types/graphql-iso-date @types/faker
  npm install --save sqlite3 vesper graphql-iso-date reflect-metadata faker

  vesper init --name sample-graphql-service --typescript

  Use for in-memory db
    typeorm init --database sqlite
    npm install --save sqlite3

  ( create or update tslint.json, tsconfig.json and ormconfig.json )
```

### Steps to run this project locally:

1. Run `npm install` command to install dependencies
2. Run `npm run build` command to build application
3. Run `npm start` command to run application locally
4. Open http://localhost:4000/playground

```
Preload inital data for testing
  typeorm migration:create -n import-users
  typeorm migration:run
```

```graphql
# 1. Add few users
mutation UserSaveBulkMutation {
  johny: userSave(firstName: "Johny", lastName: "Walker") {
    id
  }
  linda: userSave(firstName: "Linda", lastName: "Smith") {
    id
  }
}

# 2. List all users
query UserListQuery {
  users {
    id
    firstName
    lastName
  }
}
query UserListQuery {
  users(limit: 5, offset: 3) {
    id
    firstName
    lastName
  }
}

# 3. Get user by id
query UserByIdQuery {
  user(id: 1) {
    # insert user id here
    id
    firstName
    lastName
  }
}

# 4. Delete users by id
mutation UserDeleteById {
  userDelete(id: 1)
}
```

### Credit / Prior Art

- https://github.com/Microsoft/TypeScript-Node-Starter
- https://github.com/vesper-framework
- http://typeorm.io
