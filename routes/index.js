import e from "express"
const router = e.Router();
import collectionRoutes from "./collectionRoutes.js"
import imageRoutes from "./imageRoutes.js"

//api...

router.use("/collections", collectionRoutes)
router.use("/images", imageRoutes);

export default router;