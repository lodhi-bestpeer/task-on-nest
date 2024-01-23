import * as mongoose from 'mongoose';
import { Document } from 'mongoose';

export const postSchema = new mongoose.Schema({
  user:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  title: String,
  content: String,
  likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  comments: [{
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    text: String,
  }],
});


export interface Post extends Document{
 
    user: mongoose.Schema.Types.ObjectId;
    title: string;
    content:  string;
    likes:[{type: mongoose.Schema.Types.ObjectId}]
    comments:[{ userId:{type: mongoose.Schema.Types.ObjectId},text: String,}]
  
}