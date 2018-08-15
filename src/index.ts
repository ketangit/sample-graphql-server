import "reflect-metadata";
import { bootstrap } from "vesper";
import { GraphQLDate, GraphQLDateTime, GraphQLTime } from "graphql-iso-date";
import { User } from "./entity/User";
import { UserController } from "./controller/UserController";

bootstrap({
  port: +(process.env.PORT || "4000"),
  controllers: [UserController],
  entities: [User],
  schemas: [__dirname + "/schema/**/*.graphql"],
  customResolvers: {
    Date: GraphQLDate,
    Time: GraphQLTime,
    DateTime: GraphQLDateTime
  }
})
  .then(() => {
    console.log(
      "Sample node applicaiton using GraphQL and Vesper framework started sucessfully"
    );
  })
  .catch(error => {
    console.error(error.stack ? error.stack : error);
  });
