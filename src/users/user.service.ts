import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './user.model';
import  {Model}  from 'mongoose';

@Injectable()
export class UsersService {

 constructor(@InjectModel('User') public  model:Model<User>) {}

 async signup(name: string, email: string ) {
    
   const result =  await this.model.create({ name:name, email:email})
   return result;
  }

 async getUser() {
    return await this.model.find() ;
  }

  async getSingleUser(userId: string){
    return await this.model.findById(userId)
  }

  async updateUser(userId: string, name: string, email: string){
     return await this.model.findByIdAndUpdate(userId,{name,email},{new:true})

  }

  async deleteUser(userId: string){
    return await this.model.findByIdAndDelete(userId)
  }
}