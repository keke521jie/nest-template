// import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction } from 'express';

// @Injectable()
// export class LoggerMiddleware implements NestMiddleware {
//   use(req: Request, res: Response, next: NextFunction) {
//     console.log(req.url);
//     next();
//   }
// }

/** 函数写法 */
export function LoggerMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  console.log(req.url);
  next();
}
