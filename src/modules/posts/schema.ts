import { Document, model, Schema } from 'mongoose';
import { IPost } from 'types/posts';

export const PostSchema = new Schema({
  name: { type: String, required: true },
  surname: { type: String, required: true },
  users: [{ type: Schema.Types.ObjectId, ref: 'User' }],
});

export const Post = model<IPost & Document>('Post', PostSchema);
