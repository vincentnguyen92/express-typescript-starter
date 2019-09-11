import { Router } from 'express';
import { Controller, Middleware } from '../helper';

const router = Router();

router.get('/', Middleware('Test'), Controller('HomeController@index'));

export { router };
