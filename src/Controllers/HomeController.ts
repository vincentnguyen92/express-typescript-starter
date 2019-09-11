import { Request, Response } from 'express';

class HomeController {
  index(req: Request, res: Response) {
    res.send('Hello Home Page');
  }
}

export default HomeController;