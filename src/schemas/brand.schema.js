import { z } from 'zod';

export const createBrandSchema = z.object({
  name: z.string().min(2).max(80),
  country: z.string().max(60).optional(),
  website: z.string().url().max(200).optional()
});