import * as express from 'express';

function Test (req: express.Request, res: express.Response, next: express.NextFunction) {
  console.info('Test middleware');

  next();
}

export { Test };