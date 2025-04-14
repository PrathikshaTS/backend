import connectDB from "./db/index.js";
import dotenv from "dotenv";
import { app } from "./app.js";
dotenv.config({
    path: "./.env",
});
connectDB()
.then(()=>{
    app.listen(process.env.PORT)
})
.catch((err) => {
    console.log("Database connection error!!", err);
    process.exit(1);
})