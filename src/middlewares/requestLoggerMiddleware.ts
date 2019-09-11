import * as express from 'express';

function requestLoggerMiddleware (req: express.Request, res: express.Response, next: express.NextFunction) {
  const start = new Date().getTime();
  
  res.on('finish', () => {
    const elapsed = new Date().getTime() - start;
    console.info(`${req.method} ${req.originalUrl} ${res.statusCode} ${elapsed}ms`);
  });

  next();
}

export { requestLoggerMiddleware };
