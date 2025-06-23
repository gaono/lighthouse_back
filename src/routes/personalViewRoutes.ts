import {Router} from 'express';
import personalViewController from '../controllers/personalViewController';

const router = Router();

router.get(`/getCRs`, personalViewController.getPersonalCRs.bind(personalViewController));

export default router;