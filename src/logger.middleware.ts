import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import * as Joi from "joi"

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
      const userSchema = Joi.object({
        name: Joi.string().required(),
        email: Joi.string().required(),
        password: Joi.string().required()
      })
    const  {error}  = userSchema.validate(req.body,{abortEarly:false})
    if (error) {
      const errorMessage = error.details
        .map((detail) => detail.message)
        .join(', ')
        .replace(/\"/g, '');
      return res.status(400).json({  
          success: false,
          errorMessage: errorMessage
        })
    }
    next();
  }
}
