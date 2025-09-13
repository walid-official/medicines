
import { z } from "zod";

export const createMedicineSchema = z.object({
  name: z.string().min(1),
  genericName: z.string().min(1),
  strength: z.string().min(1),
  manufacturer: z.string().min(1),
  brand: z.string().min(1),
  category: z.string().min(1),
  batchNumber: z.string().optional(),
  expiryDate: z.string().optional(), 
  mrp: z.number().nonnegative().optional(),
  quantity: z.number().nonnegative().optional(),
});

export const updateMedicineSchema = createMedicineSchema.partial();
