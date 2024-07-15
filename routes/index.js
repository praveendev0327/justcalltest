import { Router } from "express";
import { getAllUsers, createUser, getUserById, getSerpApi, createProduct, createItemPurchase, loginUser } from "../handlers/index.js";

const appRouter = Router();

appRouter.get("/api/users", getAllUsers)
appRouter.get("/api/users/serpapi/:id", getSerpApi)
appRouter.post("/api/users/login", loginUser)
appRouter.post("/api/users/create", createUser)
appRouter.post("/api/users/createProduct", createProduct)
appRouter.post("/api/users/createItemPurchase", createItemPurchase)
appRouter.get("/api/users/:id", getUserById)

export default appRouter;
