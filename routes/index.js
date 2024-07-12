import { Router } from "express";
import { getAllUsers, createUser, getUserById, getSerpApi } from "../handlers/index.js";

const appRouter = Router();

appRouter.get("/api/users", getAllUsers)
appRouter.get("/api/users/serpapi/:id", getSerpApi)
appRouter.post("/api/users/create", createUser)
appRouter.get("/api/users/:id", getUserById)

export default appRouter;