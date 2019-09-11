import { Router } from 'express';
import { Controller } from './config/helpers';

const router = Router();

router.get('/', Controller('HomeController@index'));

export { router };