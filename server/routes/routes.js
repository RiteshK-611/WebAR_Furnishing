import express from 'express';
import {userSignup, userLogIn } from '../controllers/userController.js';
import { getProducts } from '../controllers/product-controller.js';

const router = express.Router();

router.post('/signup', userSignup);
router.post('/login', userLogIn);

router.get('/products', getProducts);

export default router;