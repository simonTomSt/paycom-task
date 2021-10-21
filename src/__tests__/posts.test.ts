//Normally there should be another database connection only for tests
import apolloConfig from '../app/apollo-config';
import { ApolloServer } from 'apollo-server-express';
import { postsQueries } from '../mocks/postsQueries.mock';

const server = new ApolloServer(apolloConfig);

describe('Posts API', () => {
  describe('fetch single post', () => {
    it('should find single post', async () => {
      const result = await server.executeOperation({
        query: postsQueries.FIND_POST,
      });
      const post = result.data?.post;

      expect(result.errors).toBeUndefined();
      expect(post.name).toBe('Fancy post');
      expect(post.users).toBeUndefined();
    });
    it('should find single post with users', async () => {
      const result = await server.executeOperation({
        query: postsQueries.FIND_POST_WITH_USERS,
      });
      const post = result.data?.post;

      expect(result.errors).toBeUndefined();
      expect(post.name).toBe('Fancy post');
      expect(post.users.length).toBe(1);
      expect(post.users[0].name).toBe('Thomas');
    });
    it('should throw error when no user', async () => {
      const result = await server.executeOperation({
        query: postsQueries.FIND_POST_FAILED,
      });

      expect(result.errors).toBeDefined();
    });
  });

  describe('fetch multiple post', () => {
    it('should find all post', async () => {
      const result = await server.executeOperation({
        query: postsQueries.FIND_POSTS,
      });
      const posts = result.data?.posts;
      expect(result.errors).toBeUndefined();
      expect(posts.length).toBe(3);
      expect(posts[0].users).toBeUndefined();
    });
    it('should find post with users', async () => {
      const result = await server.executeOperation({
        query: postsQueries.FIND_POSTS_WITH_USERS,
      });
      const posts = result.data?.posts;

      expect(posts[0].users).toBeDefined();
      expect(
        posts[0].users.find((user) => user.name === 'Thomas')
      ).toBeDefined();
      expect(posts[1].users).toBeDefined();
    });
  });
});
