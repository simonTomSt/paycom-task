import { User } from '@modules/users';
import { Post } from './schema';

const findAllPosts = async (parent) => {
  console.log(parent);
  console.log('parent');

  return await Post.find();
};

export const resolvers = {
  Query: {
    posts: async () => await Post.find(),
    post: async (parent, args) => await Post.findOne(args),
  },
  Post: {
    users: async (parent) =>
      await User.find({
        _id: {
          $in: parent.users,
        },
      }),
  },
};
