// src/routes/auth.route.ts
import express from "express";
import { handleRegister, handleLogin } from "../controllers/auth";
import { upload } from "../utils/multer";
import { limiter } from "../middlewares/rate-limit";
import { authenticate } from "../middlewares/auth";

const router = express.Router();

router.post("/register", upload.single("profile"), handleRegister);
router.post("/login", handleLogin);

router.get("/me", limiter, authenticate, (req, res) => {
  res.json({ message: "Protected route" });
});

router.get("/products", authenticate, (req, res) => {
    console.log((req as any).user);

  res.json({ message: "Protected Product route" });
});

export default router;