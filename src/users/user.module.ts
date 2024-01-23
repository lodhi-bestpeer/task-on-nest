import { Module } from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';


import { UsersController } from './user.controller';
import { UsersService } from './user.service';
import { userSchema } from './user.model';

@Module({
    imports:[MongooseModule.forFeature([{name:'User',schema:userSchema}])],
    controllers: [UsersController],
    providers: [UsersService],
})
export class UserModule {}