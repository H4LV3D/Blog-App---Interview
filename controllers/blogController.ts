import { Request, Response } from "express";
const BlogPost = require("../models/BlogPost");

const createBlogPost = async (req: Request, res: Response) => {
  try {
    const { title, content } = req.body;

    const newPost = new BlogPost({
      title,
      content,
      author: (req as any).user.id,
    });

    const post = await newPost.save();
    res.status(201).json(post);
  } catch (error: any) {
    console.error(error.message);
    res.status(500).json({ message: "Server Error" });
  }
};

// Implement other CRUD operations as needed

module.exports = { createBlogPost };
