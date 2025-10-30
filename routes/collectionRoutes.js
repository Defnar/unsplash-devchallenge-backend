import e from "express";
import {
  addImageToCollection,
  deleteImageFromCollection,
  getCollectionById,
  getCollections,
  getImageFromCollection,
} from "../controllers/collectionControllers.js";
const router = e.Router();

// /api/collections

router.get("/", getCollections);

router.get("/:collectionId", getCollectionById);
router.post("/:collectionId/images", addImageToCollection);
router.delete("/:collectionId/images/:imageId", deleteImageFromCollection);
router.get("/:collectionId/images/:imageId", getImageFromCollection);

export default router;
