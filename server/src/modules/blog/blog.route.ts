import { Router } from "express";
import { createBlog, updateBlog } from "./blog.controller";

const blogRoutes = Router();

// blogRoutes.use("/*", )

blogRoutes.post("/", createBlog);
blogRoutes.put("/", updateBlog);

export default blogRoutes;
