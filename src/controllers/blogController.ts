import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import Blog from "../models/Blog";
import User from "../models/User";

const createBlogPost = async (req: Request, res: Response) => {
  try {
    const { title, content, author } = req.body;

    const token = req.cookies.refresh;
    if (!token) {
      return res.status(400).json({ message: "You are not authenticated" });
    }

    if (!title || !content) {
      return res.status(400).json({ message: "Missing title or content" });
    }

    // decrpit token and check if user is valid
    const user = jwt.verify(token, process.env.JWT_SECRET as string);

    // @ts-ignore
    const isUser = await User.findById(user?.email);

    if (!isUser) {
      return res.status(400).json({ message: "User does not exist" });
    }

    const newPost = new Blog({
      title,
      content,
      author: user,
    });

    const post = await newPost.save();
    res.status(201).json({ message: "Post created" });
  } catch (error: any) {
    console.error(error.message);
    res.status(500).json({ message: "Server Error" });
  }
};

const getBlogPosts = async (req: Request, res: Response) => {
  try {
    const posts = await Blog.find().populate("author", "username");
    res.json(posts);
  } catch (error: any) {
    console.error(error.message);
    res.status(500).json({ message: "Server Error" });
  }
};

const getBlogPostById = async (req: Request, res: Response) => {
  try {
    const post = await Blog.findById(req.params.id).populate(
      "author",
      "username"
    );
    res.json(post);
  } catch (error: any) {
    console.error(error.message);
    res.status(500).json({ message: "Server Error" });
  }
};

export { createBlogPost, getBlogPosts, getBlogPostById };
