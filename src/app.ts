import * as express from 'express';
import * as http from 'http';
import * as cors from 'cors';
import * as mongoose from 'mongoose';

import { router } from './router';
import { requestLoggerMiddleware } from './middlewares/requestLoggerMiddleware';

class Application {
  app: express.Application;
  PORT = 8080;
  MONGO_URI = 'mongodb://localhost:27017/demo';

  constructor() {
    this.app = express();

    this.settings();
    this.middlewares();
    this.routes();
  }

  settings() {
    this.app.set('port', this.PORT);
    this.app.disable('x-powered-by');
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
    const server = http.createServer(this.app);

    server.listen(this.app.get('port'));
    server.on('listening', () => {
      console.log(`Server is running at ${this.app.get('port')}`);

      mongoose.connect(this.MONGO_URI, { useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true});
      mongoose.connection.on('open', () => {
        console.info('Connected to Mongo.');
      });
      mongoose.connection.on('error', (err: any) => {
        console.error(err);
      });
    });
  }
}

export { Application };
