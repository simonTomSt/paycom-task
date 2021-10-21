import apolloConfig from '../app/apollo-config';
import { ApolloServer } from 'apollo-server-express';

const server = new ApolloServer(apolloConfig);

describe('Posts API', () => {
  it('test', () => {
    expect(1 + 2).toBe(3);
  });
});
