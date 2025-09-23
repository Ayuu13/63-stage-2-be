import express from "express";
import router from "./routes/transfer-points";
// import pointTransferRoutes from "./routes/point-transfer";
// import { errorHandler } from "./middlewares/error-handler";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Global user handler
app.use((err:any, req: any, res:any, next:any) => {
  console.log(err);
  res
    .status(err.status || 500)
    .json({error: err.message || "internal server error"})
})

// Register routes
app.use("/api/v1/", router);

// Global error handler
// app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});