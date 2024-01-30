import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './user.model';
import  {Model}  from 'mongoose';
import * as bcrypt from 'bcrypt';
import * as jwt from "jsonwebtoken"


@Injectable()
export class UsersService {

 constructor(@InjectModel('User') public  model:Model<User>) {}

 async signup(name: string, email: string , password:string) {

  const bcryptPassword = await bcrypt.hash(password,10)
    
   return await this.model.create({ name:name, email:email, password:bcryptPassword})
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

  async login(email:string , password:string){
    const user =  await this.model.findOne({ email })
    if(!user){
     return "You first need to create an account and then login."
    }
    const match = await bcrypt.compare(password, user.password);
    if(!match){
      return "Invalid credential"
    }
   
    const token = jwt.sign({email:user.email},"shhhhh")

    // const verifyToken = jwt.verify(token,"shhhhh")
    // console.log("verifyToken",verifyToken)
    return {message: "login successfully", token}
  }

}