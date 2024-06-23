import express from "express";
const app = express();
import cors from "cors";
import cookieParser from "cookie-parser";
// import { u } from 'tar';

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

// Routes
import amazonRoute from "./routes/amazon.route.js";

app.use("/api/v1/amazon", amazonRoute);

export default app;
