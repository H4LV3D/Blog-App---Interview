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

    await newPost.save();
    res.status(201).json({ message: "Post created" });
  } catch (error: any) {
    console.error(error.message);
    res.status(500).json({ message: "Server Error" });
  }
};

const getBlogPosts = async (req: Request, res: Response) => {
  try {
    // Populate the author field with the complete user object
    const posts = await Blog.find().populate("author");

    // Response array to store modified posts
    const responsePosts = [];

    // Loop through each post
    for (let post of posts) {
      // Retrieve the user object ID
      const userId = post.author._id;

      // Retrieve the complete user object from the user collection
      const user = await User.findById(userId);

      // Create a modified post object with the complete user object
      const modifiedPost = {
        _id: post._id,
        title: post.title,
        content: post.content,
        author: user, // Assign the complete user object
        timestamp: post.timestamp,
        __v: post.__v,
      };

      // Push the modified post to the response array
      responsePosts.push(modifiedPost);
    }

    // Send the modified posts in the response
    res.json(responsePosts);
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const getBlogPostById = async (req: Request, res: Response) => {
  try {
    // Find the blog post by ID and populate the author field with the complete user object
    const post = await Blog.findById(req.params.id).populate("author");

    // Check if the post exists
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    // Retrieve the user object associated with the author
    const user = await User.findById(post.author._id);

    // Create a modified post object with the complete user object
    const modifiedPost = {
      _id: post._id,
      title: post.title,
      content: post.content,
      author: user, // Assign the complete user object
      timestamp: post.timestamp,
      __v: post.__v,
    };

    // Send the modified post in the response
    res.json(modifiedPost);
  } catch (error: any) {
    console.error(error);
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
