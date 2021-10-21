import apolloConfig from '../app/apollo-config';
import { ApolloServer, gql } from 'apollo-server-express';
import { usersQueries } from '../mocks/usersQueries.mock';

const server = new ApolloServer(apolloConfig);

describe('Users API', () => {
  describe('fetch single user', () => {
    it('should find single user', async () => {
      const result = await server.executeOperation({
        query: usersQueries.FIND_USER,
      });
      const user = result.data?.user;
      expect(result.errors).toBeUndefined();
      expect(user.name).toBe('Janush');
      expect(user.surname).toBe('Kovalsky');
      expect(user.posts).toBeUndefined();
    });

    it('should find single user with posts', async () => {
      const result = await server.executeOperation({
        query: usersQueries.FIND_USER_WITH_POSTS,
      });
      const user = result.data?.user;
      expect(result.errors).toBeUndefined();
      expect(user.name).toBe('Janush');
      expect(user.surname).toBe('Kovalsky');
      expect(user.posts.length).toBe(2);
      expect(user.posts[0].name).toBe('Old motorbikes');
      expect(user.posts[0].users[0].name).toBe('Janush');
    });
  });

  describe('fetch multiple users', () => {
    it('should find all users', async () => {
      const result = await server.executeOperation({
        query: usersQueries.FIND_USERS,
      });
      const users = result.data?.users;
      expect(users.length).toBe(2);
      expect(users[0].posts).toBeUndefined();
      expect(users[1].posts).toBeUndefined();
      expect(users[0].name).toBe('Janush');
      expect(users[1].name).toBe('Thomas');
    });

    it('should find users with posts', async () => {
      const result = await server.executeOperation({
        query: usersQueries.FIND_USERS_WITH_POSTS,
      });
      const users = result.data?.users;
      expect(result.errors).toBeUndefined();
      expect(users[0].posts.length).toBe(2);
      expect(users[1].posts.length).toBe(2);
      expect(
        users[1].posts[0].users.find((user) => user.name === 'Janush')
      ).toBeDefined();
      expect(
        users[1].posts[0].users.find((user) => user.name === 'Thomas')
      ).toBeDefined();
    });
  });
});
