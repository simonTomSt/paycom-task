import { postsResolvers, postsTypeDef } from '@modules/posts';
import { usersResolvers, usersTypeDef } from '@modules/users';
import { gql } from 'apollo-server-express';
import config from '@app/config';
import { merge } from 'lodash';
import mongoose from 'mongoose';

const baseTypeDefs = gql`
  type Query
`;

const apolloConfig = {
  typeDefs: [baseTypeDefs, usersTypeDef, postsTypeDef],
  resolvers: merge({}, usersResolvers, postsResolvers),
  context: async () => ({ db: await mongoose.connect(config.DATABASE_URL) }),
};

export default apolloConfig;
