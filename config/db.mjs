import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const db = process.env.mongoURI;

export default async function connectDB(){
    try{
        await mongoose.connect(db);

        console.log(`Connected to MongoDB ${mongoose.connection.name}!`)
    }catch(err){
        console.error(err.message);
        process.exit(1);
    }
}