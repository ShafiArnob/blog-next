import { Router } from "express";
import { userSignup } from "./user.controller";

const userRoutes = Router();

userRoutes.post("/signup", userSignup);
userRoutes.post("/signin", userSignup);
export default userRoutes;
