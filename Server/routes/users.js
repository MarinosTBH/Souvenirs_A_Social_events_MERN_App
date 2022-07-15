import express  from "express";
import { signin, signup, getUsers, deleteUser } from '../controllers/user.js';

const router = express.Router();

router.get('/', getUsers);
router.post('/signin', signin);
router.post('/signup', signup);
router.delete('/:id', deleteUser);


export default router;