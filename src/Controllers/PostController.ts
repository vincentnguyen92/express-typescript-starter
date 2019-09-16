import { Request, Response } from 'express';
import { Post } from "../Entity/Post";
import { getConnection } from 'typeorm';

class PostController {

  async index(req: Request, res: Response) {
    let postRepository = getConnection().getRepository(Post);
    let allPhoto = await postRepository.find();

    res.send(allPhoto);
  }
}

export default PostController;
