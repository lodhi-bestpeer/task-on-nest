import {
    Controller,
    Post,
    Body,
    Get,
    Param,
    Patch,
    Delete,
  } from '@nestjs/common';
  
  import { UsersService } from './user.service';
  
  @Controller('Users')
  export class UsersController {
    constructor(private readonly UsersService: UsersService) {}
  

    @Post("/signup")
    async addUser (
      @Body('name') name: string,
      @Body('email') email: string,
      @Body('password') password: string,
    ) {
      const user = await this.UsersService.signup(
        name,
        email,
        password
      );
      return user;
    }


    @Post("/login")
    async login (
      @Body('email') email: string,
      @Body('password') password: string,
    ) {
      const user = await this.UsersService.login(
        email,
        password
      );
      return user;
    }
  
    @Get("/getAllUser")
    getAllUser() {
      return this.UsersService.getUser();
    }
  
    @Get('/getSingalUser/:id')
    getUser(@Param('id') userId: string) {
      return this.UsersService.getSingleUser(userId);
    }
  
    @Patch('/updateUserProfile/:id')
    updateUser(
      @Param('id') userId: string,
      @Body('name') name: string,
      @Body('email') email: string,
    ) {
        return  this.UsersService.updateUser(userId, name, email, );
    }
  
    @Delete('/deleteUser/:id')
    removeUser(@Param('id') userId: string) {
        return this.UsersService.deleteUser(userId);
        
    }
  }