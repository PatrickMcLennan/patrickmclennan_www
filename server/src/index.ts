import { MikroORM } from "@mikro-orm/core";
import { ApolloServer } from "apollo-server-express";
import express from "express";
import { buildSchema } from "type-graphql";
import helmet from "helmet";
import cron from "node-cron";
import { Project } from "./entities/Project";
import { ProjectResolver } from "./resolvers/project";

async function main() {
  const orm = await MikroORM.init({
    entities: [Project],
    dbName: `patrickmclennan`,
    type: `postgresql`,
  });
  //   orm.getMigrator().up();
  const app = express();
  app.use(helmet());

  const logger = cron.schedule(`0 * * * * *`, () => {
    console.log(`hello`);
  });

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [ProjectResolver],
      validate: false,
    }),
    context: ({ req, res }) => ({ em: orm.em.fork(), req, res }),
  });

  apolloServer.applyMiddleware({ app, cors: false });

  app.listen(4000, () => {
    console.log(`Server running on Port: ${3000}`);
    logger.start();
  });
}

main().catch(console.error);
