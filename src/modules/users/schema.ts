import { model, Schema } from 'mongoose';
import { SchemaModel } from 'types/common';
import { IUser } from 'types/users';

export const UserSchema = new Schema({
  name: { type: String, required: true },
  surname: { type: String, required: true },
  posts: [{ type: Schema.Types.ObjectId, ref: 'Post' }],
});

export const User = model<SchemaModel<IUser>>('User', UserSchema);
