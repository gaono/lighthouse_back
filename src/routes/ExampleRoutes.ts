import {Router} from 'express';
import {getJohn} from '../controllers/ExampleController';

const router = Router();

router.get(`/john`, getJohn);

export default router;