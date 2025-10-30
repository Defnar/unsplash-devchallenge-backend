import e from "express";
import {
  addImageToCollection,
  deleteImageFromCollection,
  getCollectionById,
  getCollections,
} from "../controllers/collectionControllers.js";
const router = e.Router();

// /api/collections

router.get("/", getCollections);

router.get("/:collectionId", getCollectionById);
router.post("/:collectionId/images", addImageToCollection);
router.delete("/:collectionId/images/:imageId", deleteImageFromCollection);
router.get(
  "/:collectionId/images/:imageId" /*retrieve list of images in a specific collection*/
);

export default router;
