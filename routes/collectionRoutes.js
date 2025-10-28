import e from "express";
const router = e.Router();

// /api/collections

router.get("/", /*retrieve list of existing collections */)
router.get("/:collection-id", /*retrieve details of a specific collection */)
router.post("/:collection-id/images", /*add an image to a collection */)
router.delete("/:collection-id/images/:image-id", /* delete image from collection */)
router.get("/:collection-id/images/:image-id", /*retrieve list of images in a specific collection*/)

export default router;