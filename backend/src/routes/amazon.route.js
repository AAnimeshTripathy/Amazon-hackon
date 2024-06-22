import { Router } from "express";
import dashboardController from "../controllers/dashboard.controller.js";
import asyncHandler from "../utils/asyncHandler.js";

const router = Router();

// Define the new route
router.get('/summary', asyncHandler(dashboardController.getSummary));

export default router;
