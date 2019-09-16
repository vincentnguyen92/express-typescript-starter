import { Request, Response } from 'express';

class HomeController {
  index(req: Request, res: Response) {
    res.send({
      controller: 'HomeController',
      action: 'Index'
    });
  }
}

export default HomeController;
