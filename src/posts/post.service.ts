import { Injectable } from '@nestjs/common';
import { InjectModel  } from '@nestjs/mongoose';
import { Post } from './post.model';
import  {Model}  from 'mongoose';

@Injectable()
export class PostsService {

 constructor(@InjectModel('Post') public model:Model<Post>) {}

 async addPost(user: string, title:string, content: string){
  const post = await this.model.create({user,title,content});
  return post
 }
 
 async addLikeOnPost (postId: string, userId:any){

         const post = await this.model.findById(postId);
 
         if (!post.likes.includes(userId)) {
           const updatedPost = await this.model.findByIdAndUpdate(
            postId,
             { $push: { likes: userId } },
             { new: true }
           );
           return updatedPost
         } else {
           const updatedPost = await this.model.findByIdAndUpdate(
             postId,
             { $pull: { likes: userId } },
             { new: true }
           );
           return updatedPost

         }
 }
 
 async addCommentOnPost(postId:string, userId: string, text:string) {
  const post = await this.model.findByIdAndUpdate(postId, { $push: { comments: { userId, text } } }, { new: true });
  return post

 }
 
 async getLikes (postId : string) {
  const post = await this.model.findById(postId);
  return{like:  post.likes.length}
       
 }
 
  async getPosts(postId: string){
  return await this.model.findById(postId).populate("user");
      
 }
 
 
}