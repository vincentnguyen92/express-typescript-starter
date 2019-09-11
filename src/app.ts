import * as express from 'express';
import * as cors from 'cors';
import { router } from './router';
import { requestLoggerMiddleware } from './middlewares/requestLoggerMiddleware';

class Application {
  app: express.Application;

  constructor() {
    this.app = express();
    this.settings();
    this.middlewares();
    this.routes();
  }

  settings() {
    this.app.set('port', 8080);
  }

  middlewares() {
    console.log(`Load middleware success`);
    this.app.use(requestLoggerMiddleware);
    this.app.use(express.urlencoded({extended: false}));
    this.app.use(express.json());
    this.app.use(cors());
  }

  routes() {
    console.log(`Load router success`);
    this.app.use(router);
  }

  start() {
    this.app.listen(this.app.get('port'), () => {
      console.log(`Server is running at ${this.app.get('port')  }`);
    });
  }
}

export { Application };
