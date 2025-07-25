import express from "express";
// import dotenv from "dotenv";
import cors from "cors";
import passport from "passport";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import "./config/passport.js";


// dotenv.config();
connectDB();
const app = express();

app.use(cors());
app.use(express.json());
app.use(passport.initialize());


app.get("/", (req, res) => {
  res.send("API is running...");
});
app.use("/api/auth", authRoutes);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});