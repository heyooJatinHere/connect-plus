import express from "express";
import { updateInterests } from "../controllers/userController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/interests", authMiddleware, updateInterests);

export default router;
