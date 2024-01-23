import {
    Controller,
    Post,
    Body,
    Get,
    Param,
    Patch,
  } from '@nestjs/common';
  
  import { PostsService } from './post.service';
  
  @Controller('Posts')
  export class PostsController {
    constructor(private readonly PostsService: PostsService) {}
  
    @Post("/create")
    async addPost (
      @Body('user') user: string,
      @Body('title') title: string,
      @Body('content') content: string,
    ) {
      const post = await this.PostsService.addPost(
        user,
        title,
        content,
      );
      return post;
    }
  
    @Get('/getPosts/:id')
    getPost(@Param('id') userId: string) {
      return this.PostsService.getPosts(userId);
    }
  
    @Patch('/addCommentOnPost/:id')
    addCommentOnPost(
      @Param('id') postId: string,
      @Body('userId') userId: string,
      @Body('text') text: string,
    ) {
        return  this.PostsService.addCommentOnPost( postId, userId, text );
    }
  
    @Get('/getLikes/:id')
    getLikes(@Param('id') postId: string) {
        return this.PostsService.getLikes(postId);
        
    }

    @Patch('/addLikeOnPost/:id')
    addLikeOnPost(@Param('id') postId: string,
    @Body('userId') userId: string) {
        return this.PostsService.addLikeOnPost(postId, userId);
        
    }
  }