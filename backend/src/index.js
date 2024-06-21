import dotenv from "dotenv";
import connectDB from "./db/index.js";
import app from "./app.js";

dotenv.config({
    path: './.env'
});

const port = process.env.PORT || 8000;

connectDB()
    .then(() => {
        console.log("Database connected successfully");
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    })
    .catch((err) => {
        console.error("Error connecting to database:", err.message);
        process.exit(1);
    });

