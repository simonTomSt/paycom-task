import { postsResolvers, postsTypeDef } from '@modules/posts';
import { usersResolvers, usersTypeDef } from '@modules/users';

export const apolloConfig = {
  typeDefs: [usersTypeDef, postsTypeDef],
  resolvers: { ...usersResolvers, ...postsResolvers },
};
