import "reflect-metadata";

import * as express from 'express';
import * as http from 'http';
import * as cors from 'cors';
import * as mongoose from 'mongoose';
import * as dotenv from 'dotenv';

import {createConnection} from "typeorm";

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
      // connection settings are in the "ormconfig.json" file
      createConnection().then(async connection => {
        console.log("Connect success to database");
      }).catch(error => console.log("Error: ", error));
    });
  }
}

export { Application };
