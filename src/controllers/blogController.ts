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
    const user = jwt.verify(token, process.env.JWTSECRET as string);

    // @ts-ignore
    const isUser = await User.findById(user?.user?.id);

    if (!isUser) {
      return res.status(400).json({ message: "User does not exist" });
    }

    const newPost = new Blog({
      title,
      content,
      author: isUser,
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

const editBlogPost = async (req: Request, res: Response) => {
  try {
    const { title, content } = req.body;
    const postId = req.params.id;

    const token = req.cookies.refresh;
    if (!token) {
      return res.status(400).json({ message: "You are not authenticated" });
    }

    if (!title || !content) {
      return res.status(400).json({ message: "Missing title or content" });
    }

    // decrpit token and check if user is valid
    const userToken = jwt.verify(token, process.env.JWTSECRET as string);

    // @ts-ignore
    const isUser = await User.findById(userToken?.user?.id);

    if (!isUser) {
      return res.status(400).json({ message: "User does not exist" });
    }

    const post = await Blog.findById(postId);
    if (!post) {
      return res.status(400).json({ message: "Post does not exist" });
    }

    if (post.author.toString() !== isUser._id.toString()) {
      return res.status(400).json({ message: "You are not authorized" });
    }

    post.title = title;
    post.content = content;

    await post.save();
    res.status(201).json({ message: "Post updated" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const deleteBlogPost = async (req: Request, res: Response) => {
  try {
    const postId = req.params.id;

    const token = req.cookies.refresh;
    if (!token) {
      return res.status(400).json({ message: "You are not authenticated" });
    }

    // decrpit token and check if user is valid
    const userToken = jwt.verify(token, process.env.JWTSECRET as string);

    // @ts-ignore
    const isUser = await User.findById(userToken?.user?.id);

    if (!isUser) {
      return res.status(400).json({ message: "User does not exist" });
    }

    const post = await Blog.findById(postId);
    if (!post) {
      return res.status(400).json({ message: "Blog does not exist" });
    }

    if (post.author.toString() !== isUser._id.toString()) {
      return res.status(400).json({ message: "You are not authorized" });
    }

    await Blog.findByIdAndDelete(postId);
    res.status(200).json({ message: "Blog deleted" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

export {
  createBlogPost,
  getBlogPosts,
  getBlogPostById,
  editBlogPost,
  deleteBlogPost,
};
