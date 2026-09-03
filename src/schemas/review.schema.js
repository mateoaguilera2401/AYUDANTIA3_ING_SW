import { z } from 'zod';

export const createReviewSchema = z.object({
  author: z.string().min(2).max(100),
  rating: z.number().int().min(1).max(5),
  comment: z.string().min(10).max(500)
});