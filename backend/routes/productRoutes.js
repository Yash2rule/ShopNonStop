import express from 'express';
const router = express.Router()
import { getProducts,getProductById,deleteProductById, createProduct, updateProduct, createProductReviews,getTopRatedProducts} from '../controllers/productController.js';
import {protect , admin} from '../middleware/authMiddleware.js';

router.route('/').get(getProducts).post(protect,admin,createProduct);
router.route('/top').get(getTopRatedProducts);
router.route('/:id/reviews').post(protect,createProductReviews);
router.route('/:id').get(getProductById).delete(protect, admin,deleteProductById).put(protect, admin,updateProduct)

export default router;