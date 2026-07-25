import { Router } from "express";
import { explainTopic } from "../controllers/explain.controller.js";

const router = Router();

router.post("/explain", explainTopic);

export default router;