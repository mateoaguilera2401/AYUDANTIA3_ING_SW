import { Router } from 'express';
import { getProductReviews, createReview } from '../controllers/review.controller.js';
import { validate } from '../middlewares/validate.middleware.js';
import { createReviewSchema } from '../schemas/review.schema.js';

const router = Router({ mergeParams: true }); // CLAVE para capturar el :id del producto

router.get('/', getProductReviews);
router.post('/', validate(createReviewSchema, 'body'), createReview);

export default router;