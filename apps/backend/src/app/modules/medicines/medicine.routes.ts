
import { Router } from "express";
import { createMedicineController, deleteMedicineController, getMedicineByIdController, getMedicinesController, updateMedicineController } from "./medicine.controller";
import { checkAuth } from "../../middlewares/checkAuth";
import { Role } from "../user/user.interface";


const router = Router();

router.post("/", createMedicineController, checkAuth(...Object.values(Role)));
router.get("/", getMedicinesController, checkAuth(...Object.values(Role))); 
router.get("/:id", getMedicineByIdController, checkAuth(...Object.values(Role)));
router.put("/:id", updateMedicineController, checkAuth(...Object.values(Role)));
router.delete("/:id", deleteMedicineController, checkAuth(...Object.values(Role)));

export const MedicineRoutes = router;