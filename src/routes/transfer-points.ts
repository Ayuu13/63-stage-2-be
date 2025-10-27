import express from "express";
import { transferPoints, getUserPoints } from "../controllers/transfer-points";

const router = express.Router();

router.post("/transfer-points", transferPoints);
router.get("/users/points/:id", getUserPoints);

export default router;