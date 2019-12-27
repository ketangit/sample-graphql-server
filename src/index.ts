import { ApolloServer } from "apollo-server";
import dotenv from "dotenv";
import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { Container } from "typedi";
import { createConnection, useContainer } from "typeorm";
import { ContactResolver, CustomerResolver, EmployeeResolver, WarehouseResolver } from "./resolvers";

// register 3rd party IOC container
useContainer(Container);

async function bootstrap() {
  try {
    // create TypeORM connection
    await createConnection();

    // initialize configuration
    dotenv.config();

    // build TypeGraphQL executable schema
    const schema = await buildSchema({
      resolvers: [ContactResolver, CustomerResolver, EmployeeResolver, WarehouseResolver],
      container: Container
    });

    const server = new ApolloServer({
      schema,
      tracing: false,
      playground: true
    });

    server.listen({ port: process.env.SERVER_PORT }).then(({ url }) => {
      console.log(`GraphQL Server started and available at ${url}`);
    });
  } catch (err) {
    console.error(err);
  }
}

bootstrap().catch(console.error);
