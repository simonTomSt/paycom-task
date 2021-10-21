import { ApolloServer } from 'apollo-server-express';
import config from '@app/config';
import express from 'express';
import { apolloConfig } from '@app/apollo-config';
import Server from '@app/server';

const app = express();
const apolloServer = new ApolloServer(apolloConfig);
const server = new Server(app, apolloServer, config.PORT);

Promise.resolve()
  .then(() => {
    server.initApollo();
    server.run();
  })
  .catch((error) => {
    console.log(error);
    return new Error('Internal server error');
  });
