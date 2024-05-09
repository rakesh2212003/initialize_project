import express from 'express'
import { signup, login } from '../controllers/auth.js'
import { getUser, getAllUser, deleteUser } from '../controllers/user.js'
import verifyToken from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);

router.get('/getUser/:id', getUser);
router.get('/getAllUser', getAllUser);

router.patch('/delete/:id', deleteUser);

export default router