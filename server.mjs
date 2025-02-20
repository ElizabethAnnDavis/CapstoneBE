import express from 'express';
import connectDB from './config/db.mjs';
import dotenv from 'dotenv';
import userRoutes from './routes/api/users.mjs';
import authRoutes from './routes/api/auth.mjs';
import cors from 'cors';

dotenv.config();

const app = express();

connectDB();