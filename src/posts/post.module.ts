import { Module } from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';


import { PostsController } from './post.controller';
import { PostsService } from './post.service';
import { postSchema } from './post.model';

@Module({
    imports:[MongooseModule.forFeature([{name:'Post',schema:postSchema}])],
    controllers: [PostsController],
    providers: [PostsService],
})
export class PostModule {}