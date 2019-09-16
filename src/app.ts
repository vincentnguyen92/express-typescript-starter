import "reflect-metadata";
import * as express from 'express';
import * as http from 'http';
import * as cors from 'cors';
import * as mongoose from 'mongoose';
import * as dotenv from 'dotenv';

import { router } from './router';
import { RequestLogger } from './Middleware/RequestLogger';

class Application {
  app: express.Application;

  constructor() {
    dotenv.config();
    this.app = express();

    this.settings();
    this.middlewares();
    this.routes();
  }

  settings() {
    this.app.set('port', process.env.APP_PORT);
    this.app.set('mongo_uri', process.env.MONGO_URI);
    this.app.disable('x-powered-by');
  }

  middlewares() {
    this.app.use(RequestLogger);
    this.app.use(express.urlencoded({extended: false}));
    this.app.use(express.json());
    this.app.use(cors());
  }

  routes() {
    this.app.use(router);
  }

  start() {
    const server = http.createServer(this.app);

    server.listen(this.app.get('port'));
    server.on('listening', async () => {
      console.log(`Server is running at ${this.app.get('port')}`);

      mongoose.connect(this.app.get('mongo_uri'), { useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true});
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
