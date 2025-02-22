import express from 'express';
import connectDB from './config/db.mjs';
import dotenv from 'dotenv';
import userRoutes from './routes/api/users.mjs';
import authRoutes from './routes/api/auth.mjs';
import profileRoutes from './routes/api/profiles.mjs';
import cors from 'cors';

dotenv.config();

//Initialize our app variable with Express
const app = express();

//Connect Database
connectDB();

// Initialize middleware
app.use(express.json({ extended: false }));
app.use(cors());

//Define Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/user/profile', profileRoutes);

// Enviromental Variables
const PORT = process.env.PORT || 3000;

// Starts the Express server and listens for incoming requests
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));