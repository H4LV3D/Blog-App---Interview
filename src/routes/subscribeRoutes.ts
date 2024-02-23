import express from "express";

import { subscribe } from "../controllers/subscribeController";

const router = express.Router();

router.post("/", subscribe);

export default router;
