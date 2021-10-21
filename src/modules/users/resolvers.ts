import { Post } from '@modules/posts';
import { IUser } from 'types/users';
import { User } from './schema';

export const resolvers = {
  Query: {
    users: async () => await User.find(),
    user: async (parent, args) => await User.findOne(args),
  },
  User: {
    posts: async (parent) =>
      await Post.find({
        _id: {
          $in: parent.posts,
        },
      }),
  },
};
