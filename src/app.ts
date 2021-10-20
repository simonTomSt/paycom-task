import { ApolloServer } from 'apollo-server-express';
import config from '@app/config';
import express from 'express';

const app = express();
const server = new ApolloServer({});
server.applyMiddleware({ app });

app.listen(config.PORT);
