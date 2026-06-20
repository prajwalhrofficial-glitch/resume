import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';
import path from 'path';
import { fileURLToPath } from 'url';

// Routes
import authRoutes from './src/routes/auth.js';
import resumeRoutes from './src/routes/resume.js';
import analysisRoutes from './src/routes/analysis.js';
import careerRoutes from './src/routes/career.js';

// Middleware
import { errorHandler } from './src/middleware/errorHandler.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:5173',
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Database Connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/career-guidance')
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/resume', resumeRoutes);
app.use('/api/analysis', analysisRoutes);
app.use('/api/career', careerRoutes);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running', timestamp: new Date() });
});

// Error handling middleware
app.use(errorHandler);

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
