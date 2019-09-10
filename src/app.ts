import * as express from 'express'

class Application {
  app: express.Application;

  constructor() {
    this.app = express();
    this.settings();
    this.routes();
  }

  settings() {
    console.log(`Setting here`);
    this.app.set('port', 8080);
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
