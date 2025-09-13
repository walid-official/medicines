import { Router } from "express";
import {  createUserController, updateUserController } from "./user.controller";
import { validateRequest } from "../../middlewares/validateRequest";
import { createUserZodSchema, updateUserZodSchema } from "./user.zodSchema";
import { checkAuth } from "../../middlewares/checkAuth";
import { Role } from "./user.interface";

const router = Router()
router.post("/register", validateRequest(createUserZodSchema), createUserController)
router.patch("/:id", validateRequest(updateUserZodSchema), checkAuth(...Object.values(Role)), updateUserController)


export const UserRoutes = router;