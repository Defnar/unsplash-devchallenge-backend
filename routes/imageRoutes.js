import e from "express";
import { imageDetails, searchImages } from "../controllers/imageControllers.js";

const router = e.Router();

// /api/images/...
router.get("/search", searchImages)
router.get("/:id", imageDetails);

export default router;