import express from "express";
import cors from "cors";
import userRoutes from "./modules/user/user.route";

const app = express();

// middlewares
// app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Hello");
});
app.use("/api/v1/user", userRoutes);
export default app;
