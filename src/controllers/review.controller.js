import prisma from '../config/prisma.js';

export const getProductReviews = async (req, res, next) => {
  try {
    const productId = parseInt(req.params.id);
    const reviews = await prisma.review.findMany({ where: { productId } });
    
    const averageRating = reviews.length > 0 
      ? reviews.reduce((acc, curr) => acc + curr.rating, 0) / reviews.length 
      : 0;

    res.json({ averageRating, reviews });
  } catch (error) {
    next(error);
  }
};

export const createReview = async (req, res, next) => {
  try {
    const productId = parseInt(req.params.id);
    
    // Si el producto no existe, lo mandamos a caminar por la plancha con un 404
    const product = await prisma.product.findUnique({ where: { id: productId } });
    if (!product) return res.status(404).json({ message: "Producto no encontrado" });

    const newReview = await prisma.review.create({
      data: { ...req.body, productId }
    });
    res.status(201).json(newReview);
  } catch (error) {
    next(error);
  }
};