import * as mongoose from 'mongoose';
import { Document } from 'mongoose';

export const userSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true
  },
});

export interface User extends Document{
 
     id: string;
     name: string;
     email:  string

  
}