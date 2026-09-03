import { Router } from 'express';
import { getBrands, createBrand } from '../controllers/brand.controller.js';
import { validate } from '../middlewares/validate.middleware.js';
import { createBrandSchema } from '../schemas/brand.schema.js';

const router = Router();

router.get('/', getBrands);
router.post('/', validate(createBrandSchema, 'body'), createBrand);

export default router;