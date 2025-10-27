// src/middleware/auth.middleware.ts
import { Request, Response, NextFunction } from "express";
import { verifyToken } from "../utils/jwt";

export function authenticate(req: Request, res: Response, next: NextFunction) {
  console.log(req.headers.authorization);
  
    const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    res.status(401).json({ message: "Unauthorized" });
    return;
  }

  try {
    const decoded = verifyToken(token);
    (req as any).user = decoded as any;
    console.log((req as any).user);
    
    next();
  } catch {
    res.status(401).json({ message: "Invalid token" });
    return;
  }
}