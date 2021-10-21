import { Post } from '@modules/posts';
import { PostsService } from '@modules/posts/postsService';
import { IUser } from 'types/users';
import { User } from './schema';
import { UsersService } from './usersService';

const usersService = new UsersService();
const postsService = new PostsService();

export const resolvers = {
  Query: {
    users: usersService.findAll,
    user: async (parent, args) => await User.findOne(args),
  },
  User: {
    posts: async (parent) =>
      await postsService.findAll({
        _id: {
          $in: parent.posts,
        },
      }),
  },
};
