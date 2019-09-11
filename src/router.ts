import { Router } from 'express';
import { Controller } from '../helper';

const router = Router();

router.get('/', Controller('HomeController@index'));
router.get('/home/demo/:id', Controller('HomeController@demo'));

export { router };
