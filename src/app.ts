import "reflect-metadata";

import * as express from 'express';
import * as http from 'http';
import * as cors from 'cors';
import * as dotenv from 'dotenv';

import { router } from './router';
import { RequestLogger } from './Middleware/RequestLogger';
import { createConnection } from "typeorm";

class Application {
  app: express.Application;

  constructor() {
    dotenv.config();

    this.app = express();
    this.connection();

    this.settings();
    this.middlewares();
    this.routes();
  }

  connection() {
    // connection settings are in the "ormconfig.json" file
    createConnection().then(async connection => {
      console.log('Connect database success');
    }).catch(error => console.log("Error: ", error));
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
    });
  }
}

export { Application };
