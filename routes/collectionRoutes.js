import e from "express";
import { getCollectionById, getCollections } from "../controllers/collectionControllers.js";
const router = e.Router();

// /api/collections

router.get("/", getCollections);

router.get("/:collection-id", getCollectionById);
router.post("/:collection-id/images" /*add an image to a collection */);
router.delete(
  "/:collection-id/images/:image-id" /* delete image from collection */
);
router.get(
  "/:collection-id/images/:image-id" /*retrieve list of images in a specific collection*/
);

export default router;
