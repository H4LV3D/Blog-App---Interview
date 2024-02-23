import express, { Express, Request, Response, Application } from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import config from "./config";
import cookies from "cookie-parser";
import authRoutes from "./routes/authRoute";
import blogRoutes from "./routes/blogRoutes";
import subscribeRoutes from "./routes/subscribeRoute";

dotenv.config();

const app: Application = express();
const port = process.env.PORT || 6000;

app.use(cookies());
app.use(bodyParser.json());
app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: [
      "http://localhost:3000",
      "http://localhost:3001",
      "http://localhost:8080",
      "http://localhost:8081",
      "https://blogger-interview.vercel.app",
      "https://blogger-interview.vercel.app/",
    ],
  })
);

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Express & TypeScript Server");
});

app.use("/auth", authRoutes);
app.use("/blogs", blogRoutes);
app.use("/subscribe", subscribeRoutes);

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", true);
    const conn = await mongoose.connect(config.SERVER_URI as string);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

connectDB().then(() => {
  app.listen(process.env.PORT, function () {
    console.log(`The server is listening on ${process.env.PORT ?? port}`);
  });
});
