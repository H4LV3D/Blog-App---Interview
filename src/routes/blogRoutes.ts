import express from "express";

import {
  createBlogPost,
  getBlogPostById,
  getBlogPosts,
} from "../controllers/blogController";

const router = express.Router();

// Route for creating a blog post
router.post("/create", createBlogPost);

// Route for getting all blog posts
router.get("/", getBlogPosts);

// Route for getting a blog post by id
router.get("/:id", getBlogPostById);

export default router;
