import prisma from '../config/prisma.js';

export const getBrands = async (req, res, next) => {
  try {
    const brands = await prisma.brand.findMany({
      include: { _count: { select: { products: true } } }
    });
    res.json(brands);
  } catch (error) {
    next(error);
  }
};

export const createBrand = async (req, res, next) => {
  try {
    const newBrand = await prisma.brand.create({ data: req.body });
    res.status(201).json(newBrand);
  } catch (error) {
    next(error);
  }
};