import express from "express";
import { getAdmin, getUserPerformance } from "../controllers/managment.js";

const router = express.Router();
router.get('/admin', getAdmin)
router.get("/performance/:id", getUserPerformance)

export default router