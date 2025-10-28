import e from "express";

const router = e.Router();

// /api/images/...
router.get("/search", /* search controller here*/)
router.get(":id", /*image controller here*/);

export default router;