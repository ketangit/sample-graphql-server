import "reflect-metadata";
import { createConnection } from "typeorm";
import { bootstrap } from 'vesper';
import { GraphQLDate, GraphQLDateTime, GraphQLTime } from 'graphql-iso-date';
import { User } from "./entity/User";
import { UserController } from './controller/UserController';

bootstrap({
  port: 4000,
  controllers: [
    UserController
  ],
  entities: [
    User
  ],
  schemas: [
    __dirname + '/schema/**/*.graphql'
  ],
  customResolvers: {
    Date: GraphQLDate,
    Time: GraphQLTime,
    DateTime: GraphQLDateTime
  },
  cors: true,
  setupContainer: async (container, action) => {
    const request = action.request;
  }
}).then(() => {
  console.log('Your app is up and running on http://localhost:4000. ' +
    'You can use playground in development mode on http://localhost:4000/playground');
}).catch(error => {
  console.error(error.stack ? error.stack : error);
});
