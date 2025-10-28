import e from "express"
const router = e.Router();
import collectionRoutes from "./collectionRoutes.js"

//api...

router.use("/collections", collectionRoutes)

export default router;