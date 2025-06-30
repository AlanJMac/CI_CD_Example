import { Router } from 'express';
import { getUsers } from '../controllers/userContoller';

const router = Router();

router.get('/', getUsers);

export default router;
