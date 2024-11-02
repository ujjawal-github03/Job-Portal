// To connect with db
import mongoose, { mongo } from "mongoose";

const connectDB=async()=>
{
    try {
        const conn = await mongoose.connect(process.env.DB_LOCAL_URL);
        console.log(`Connect to MongoDB : ${mongoose.connection.host}`);
        
    } catch (error) {
        console.log(`MongoDB error: ${error}`);
    }
}
export default connectDB;