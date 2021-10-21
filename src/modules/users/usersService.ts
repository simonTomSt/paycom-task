import { ReadService } from '@shared/abstracts';
import { IUser } from 'types/users';
import { User } from './schema';

export class UsersService extends ReadService<IUser> {
  constructor() {
    super(User);
  }
}
