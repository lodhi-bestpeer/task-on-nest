
import { Module, NestModule, MiddlewareConsumer,RequestMethod } from '@nestjs/common';
import { LoggerMiddleware } from './/logger.middleware';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from "./users/user.module"
import { PostModule } from "./posts/post.module"
import {MongooseModule} from '@nestjs/mongoose';


@Module({
  imports: [UserModule,PostModule,MongooseModule.forRoot("mongodb://mongodb:27017/nest"),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
      consumer
        .apply(LoggerMiddleware)
        .forRoutes('users/signup');;
    }
}

