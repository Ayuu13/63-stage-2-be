import cors from "cors";

const corsMiddleware = cors({
  origin: "http://localhost:5173", // ganti dengan URL front-end kamu
  credentials: true
});

export default corsMiddleware;