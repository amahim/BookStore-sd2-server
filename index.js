import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { PORT, mongoDBURL } from "./config.js";
import booksRoute from "./routes/booksRoute.js";

const app = express();

// Middleware for parsing request body
app.use(express.json());

// Middleware for handling CORS POLICY - Allow all origins for production
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
    credentials: true,
  })
);

app.get("/", (request, response) => {
  return response
    .status(200)
    .json({ message: "Welcome To BookStore MERN Stack Project" });
});

app.use("/books", booksRoute);

// Connect to MongoDB
mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App connected to database");
  })
  .catch((error) => {
    console.log("Database connection error:", error);
  });

// Only start server if not in Vercel environment
if (process.env.NODE_ENV !== "production") {
  app.listen(PORT, () => {
    console.log(`App is listening to port: ${PORT}`);
  });
}

// Export the Express app for Vercel
export default app;
