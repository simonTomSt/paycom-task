import { ApolloServer } from 'apollo-server-express';
import config from '@app/config';
import express from 'express';
import { resolvers } from '@modules/users/resolvers';
import { apolloConfig } from '@app/apollo-config';

const startServer = async () => {
  try {
    const app = express();
    const server = new ApolloServer(apolloConfig);
    await server.start();
    server.applyMiddleware({ app });

    app.listen({ port: config.PORT }, () => {
      console.log(`SERVER RUNNING ON PORT: ${config.PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
};

startServer();
