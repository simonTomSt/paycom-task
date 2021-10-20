import { postsData } from '@app/fakeData';

export const resolvers = {
  Query: {
    posts: () => postsData,
  },
};
