import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const db = process.env.mongoURI;

const connectDB = async () => {
    try{
        await mongoose.connect(db, {useNewUrlParser: true,});

        console.log(`Connected to MongoDB ${mongoose.connection.name}!`)
    }catch(err){
        console.error(err.message);
        process.exit(1);
    }
}