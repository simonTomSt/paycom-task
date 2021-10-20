import { ApolloServer } from 'apollo-server-express';
import config from '@app/config';
import express from 'express';
import { resolvers } from '@modules/users/resolvers';
import { typeDefs } from '@modules/users/typeDef';

const app = express();
const server = new ApolloServer({ typeDefs, resolvers });
server.start().then(() => server.applyMiddleware({ app }));

app.listen({ port: config.PORT }, () => {
  console.log(`SERVER RUNNING ON PORT: ${config.PORT}`);
});
