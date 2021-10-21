import { ReadService } from '@shared/abstracts';
import { IPost } from 'types/posts';
import { Post } from './schema';

export class PostsService extends ReadService<IPost> {
  constructor() {
    super(Post);
  }
}
