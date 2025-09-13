
import { Router } from "express";
import { createMedicineController, deleteMedicineController, getMedicineByIdController, getMedicinesController, updateMedicineController } from "./medicine.controller";


const router = Router();

router.post("/", createMedicineController);
router.get("/", getMedicinesController); 
router.get("/:id", getMedicineByIdController);
router.put("/:id", updateMedicineController);
router.delete("/:id", deleteMedicineController);

export const MedicineRoutes = router;