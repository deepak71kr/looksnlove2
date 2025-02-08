import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./lib/db.js";

const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`);
    connectDB();
})

// app.use("/api/v1/auth", authRoute);
