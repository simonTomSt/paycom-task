import { model, Schema } from 'mongoose';
import { SchemaModel } from 'types/common';
import { IPost } from 'types/posts';

export const PostSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  surname: { type: String, required: true },
  users: [{ type: Schema.Types.ObjectId, ref: 'User' }],
});

export const Post = model<SchemaModel<IPost>>('Post', PostSchema);
