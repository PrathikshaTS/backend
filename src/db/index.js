import mongoose from "mongoose";
import {DB_NAME} from "../constants.js"
const connectDB = async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log("MongoDB connected successfully");
        
    } catch (error) {
        console.log("Error connecting to MongoDB:", error);
        process.exit(1); 
    }
}

export default connectDB;