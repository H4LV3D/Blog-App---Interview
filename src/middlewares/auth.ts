import { Request, Response, NextFunction } from "express";
const jwt = require("jsonwebtoken");

const requireAuth = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;

  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, (err: any, decodedToken: any) => {
      if (err) {
        return res.status(401).json({ message: "Unauthorized" });
      } else {
        //   @ts-ignore
        req.user = decodedToken.user;
        next();
      }
    });
  } else {
    return res.status(401).json({ message: "Unauthorized" });
  }
};

module.exports = { requireAuth };
