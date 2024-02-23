import express from "express";

import {
  createBlogPost,
  getBlogPostById,
  getBlogPosts,
  editBlogPost,
  deleteBlogPost,
} from "../controllers/blogController";

const router = express.Router();

// Route for creating a blog post
router.post("/", createBlogPost);

// Route for getting all blog posts
router.get("/", getBlogPosts);

// Route for getting a blog post by id
router.get("/:id", getBlogPostById);

// Route for editing a blog post
router.patch("/:id", editBlogPost);

// Route for deleting a blog post
router.delete("/:id", deleteBlogPost);

export default router;
