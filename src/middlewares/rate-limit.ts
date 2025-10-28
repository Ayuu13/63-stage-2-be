import rateLimit from "express-rate-limit";

export const limiter = rateLimit({
  windowMs: 60 * 1000, // 1 menit
  max: 3, // Maksimal 5 request per IP
  message: "Terlalu banyak request, coba lagi nanti.",
});
 export default limiter;