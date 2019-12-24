# Sample Typescript Nodejs Server application using TypeGraphQL, TypeORM and Node-OracleDB

### Steps to create base TypeScript project without TypeGraphQL, TypeORM and Node-OracleDB
```
Create a folder 
  mkdir sample-graphql-server
  cd sample-graphql-server
  npm init -> creates package.json

(-D flag is the shortcut for: --save-dev)
  npm install -D typescript
  npm install -D tslint
  npm install express -S

Types in TypeScript are files, normally with an extension of .d.ts*, used to provide type information about an API, in our case Express.
  npm install -D @types/express

Run the following command to generate a 'tsconfig.json' file
  npx tsc --init --rootDir src --outDir dist --esModuleInterop --resolveJsonModule --lib es6 --module commonjs --allowJs true --noImplicitAny true

Run the following command to generate a 'tslint.json' file
  .\node_modules\.bin\tslint --init

Create 'index.ts' file which is the start of the server
  mkdir src
  cd src
  index.ts

Add continuious development
  npm install -D ts-node nodemon
  npm install -D typescript-tslint-plugin typescript
  Create 'nodemon.json' file

A Better Way to Manage Configuration Settings in Node.js
  npm install dotenv
  
Creating production builds
  npm install -D rimraf
```

### Steps to add TypeGraphQL dependecies
```
  npm install graphql 
  npm install -D type-graphql
  npm install reflect-metadata
```

### Steps to run this project locally:
1. Run `npm install` command to install dependencies
2. Run `npm run build` command to build application
3. Run `npm run start-dev` command to run application locally
4. Open http://localhost:4000/playground

### Credit / Prior Art
- https://github.com/Microsoft/TypeScript-Node-Starter
- https://github.com/MichalLytek/type-graphql
- https://github.com/typeorm/typeorm
- https://www.npmjs.com/package/typeorm-model-generator
- https://github.com/oracle/node-oracledb
- https://khalilstemmler.com/blogs/typescript/node-starter-project/
- https://scotch.io/tutorials/setting-up-a-node-project-with-typescript
