const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
app.use(express.json());

// Health check first - no database needed
app.get('/api/health', (req, res) => res.json({ status: 'ok' }));

const authRoutes = require('./routes/auth.routes');
const booksRoutes = require('./routes/books.routes');
const materialsRoutes = require('./routes/materials.routes');
const internshipsRoutes = require('./routes/internships.routes');
const housingRoutes = require('./routes/housing.routes');

app.use('/api/auth', authRoutes);
app.use('/api/books', booksRoutes);
app.use('/api/materials', materialsRoutes);
app.use('/api/internships', internshipsRoutes);
app.use('/api/housing', housingRoutes);

module.exports = app;