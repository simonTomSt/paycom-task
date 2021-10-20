import { usersData } from '@app/fakeData';

export const resolvers = {
  Query: {
    users: () => usersData,
    user: async (name: string) => usersData.find((user) => console.log(name)),
  },
};
