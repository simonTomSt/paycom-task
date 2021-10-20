import { usersData } from '@app/fakeData';

export const resolvers = {
  Query: {
    getAllUsers: () => usersData,
  },
};
