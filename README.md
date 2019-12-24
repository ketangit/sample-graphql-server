# Sample Typescript Nodejs Server application using TypeGraphQL, TypeORM and Node-OracleDB

### Steps to create base TypeScript project
```
1. Create a folder 
    mkdir sample-graphql-server
    cd sample-graphql-server
    npm init -> creates package.json

2. Install node modules
    npm install -D typescript (-D flag is the shortcut for: --save-dev)
    npm install -D tslint
    npm install express -S
    npm install -D @types/express
    npm install -D ts-node nodemon (Create 'nodemon.json' file)
    npm install -D typescript-tslint-plugin typescript
    npm install dotenv
    npm install -D rimraf
  
3. Run the following command to generate a 'tsconfig.json' file
    npx tsc --init --rootDir src --outDir dist --esModuleInterop --resolveJsonModule \
    --lib es6 --module commonjs --allowJs true --noImplicitAny true

4. Run the following command to generate a 'tslint.json' file
    .\node_modules\.bin\tslint --init

5. Create 'index.ts' file which is the start of the server
    mkdir src
    cd src
    index.ts
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
4. Open http://localhost:3000

### Credit / Prior Art
- https://github.com/Microsoft/TypeScript-Node-Starter
- https://github.com/MichalLytek/type-graphql
- https://github.com/typeorm/typeorm
- https://www.npmjs.com/package/typeorm-model-generator
- https://github.com/oracle/node-oracledb
- https://khalilstemmler.com/blogs/typescript/node-starter-project/
- https://scotch.io/tutorials/setting-up-a-node-project-with-typescript
