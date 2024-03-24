import { Router } from "express";
import { createBlog, showSingleBlog, updateBlog } from "./blog.controller";
import { checkToken } from "../middlewares";

const blogRoutes = Router();

// blogRoutes.use("/*", )
blogRoutes.use(checkToken);

blogRoutes.post("/", createBlog);
blogRoutes.put("/", updateBlog);
blogRoutes.get("/:id", showSingleBlog);

export default blogRoutes;
