import express from 'express';
import {userSignup, userLogIn } from '../controllers/userController.js';

const router = express.Router();

router.post('/signup', userSignup);
router.post('/login', userLogIn);

export default router;