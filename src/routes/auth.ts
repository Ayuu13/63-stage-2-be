// src/routes/auth.route.ts
import express from "express";
import { handleRegister, handleLogin } from "../controllers/auth";
import { authenticate } from "../middlewares/auth";
import { prisma } from "../connection/client";

const router = express.Router();

router.post("/register", handleRegister);
router.post("/login", handleLogin);

router.get("/me", authenticate, (req, res) => {
  res.json({ message: "Protected route" });
});

router.get("/products", authenticate, (req, res) => {
    console.log((req as any).user);

  res.json({ message: "Protected Product route" });
});

export default router;