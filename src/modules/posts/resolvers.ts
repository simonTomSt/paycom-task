import { User } from '@modules/users';
import { UsersService } from '@modules/users/usersService';
import { PostsService } from './postsService';
import { Post } from './schema';

const postsService = new PostsService();
const userService = new UsersService();

export const resolvers = {
  Query: {
    posts: postsService.findAll,
    post: async (parent, args) => await postsService.findSingle(args),
  },
  Post: {
    users: async (parent) =>
      await userService.findAll({
        _id: {
          $in: parent.users,
        },
      }),
  },
};
