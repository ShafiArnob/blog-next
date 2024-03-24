import { Router } from "express";
import { createBlog, showSingleBlog, updateBlog } from "./blog.controller";

const blogRoutes = Router();

// blogRoutes.use("/*", )

blogRoutes.post("/", createBlog);
blogRoutes.put("/", updateBlog);
blogRoutes.get("/:id", showSingleBlog);

export default blogRoutes;
