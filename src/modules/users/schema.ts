import { Document, model, Schema } from 'mongoose';
import { IUser } from 'types/users';

export const UserSchema = new Schema({
  name: { type: String, required: true },
  surname: { type: String, required: true },
  posts: [{ type: Schema.Types.ObjectId, ref: 'Post' }],
});

export const User = model<IUser & Document>('User', UserSchema);
