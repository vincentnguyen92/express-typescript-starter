import * as express from 'express';
import * as cors from 'cors';

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
    this.app.use(express.urlencoded({extended: false}));
    this.app.use(express.json());
    this.app.use(cors());
  }

  routes() {
    console.log(`Routing here`);
  }

  start() {
    this.app.listen(this.app.get('port'), () => {
      console.log(`Server is running at ${this.app.get('port')  }`);
    });
  }
}

export default Application;
