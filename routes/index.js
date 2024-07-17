import { Router } from "express";
import { getAllUsers, createUser, getUserById, getSerpApi, createProduct, createItemPurchase, loginUser, getSubGroupList, getAllSubGroupList, updateProduct, updateImage } from "../handlers/index.js";

import multer from "multer";
import path from "path";

const appRouter = Router();

const storage = multer.diskStorage({
    destination : "./upload/images",
    filename : (req, file, cb) =>{
        return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({
    storage : storage
})


appRouter.get("/api/users", getAllUsers)
appRouter.get("/api/users/allCategoryList/:SubGroupName", getAllSubGroupList)
appRouter.get("/api/users/subGroupList", getSubGroupList)
appRouter.get("/api/users/serpapi/:id", getSerpApi)
appRouter.post("/api/users/login", loginUser)
appRouter.post("/api/users/create", createUser)
appRouter.post("/api/users/offers", addOffers)
appRouter.put("/api/users/updateProduct",upload.single("image"), updateProduct)
appRouter.put("/api/users/updateProductImage", updateImage)
appRouter.post("/api/users/createProduct", createProduct)
appRouter.post("/api/users/createItemPurchase", createItemPurchase)
appRouter.get("/api/users/:id", getUserById)

export default appRouter;
