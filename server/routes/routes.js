import express from 'express';
import {userSignup, userLogIn } from '../controllers/userController.js';
import { getProducts,  getProductById } from '../controllers/product-controller.js';
import { addPaymentGateway, paymentResponse } from '../controllers/payment-controller.js';

const router = express.Router();

router.post('/signup', userSignup);
router.post('/login', userLogIn);

router.get('/products', getProducts);
router.get('/product/:id', getProductById);

router.post('/payment', addPaymentGateway);
router.post('/callback', paymentResponse);



export default router;

