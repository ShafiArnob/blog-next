import { Router } from "express";
import { createBlog } from "./blog.controller";

const blogRoutes = Router();

// blogRoutes.use("/*", )

blogRoutes.post("/", createBlog);

export default blogRoutes;
