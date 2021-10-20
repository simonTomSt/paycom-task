import { ApolloServer } from 'apollo-server-express';
import config from '@app/config';
import express from 'express';
import { resolvers } from '@modules/users/resolvers';
import { apolloConfig } from '@app/apollo-config';

const app = express();
const server = new ApolloServer(apolloConfig);
server.start().then(() => server.applyMiddleware({ app }));

app.listen({ port: config.PORT }, () => {
  console.log(`SERVER RUNNING ON PORT: ${config.PORT}`);
});
