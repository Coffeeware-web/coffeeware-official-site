const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
require('dotenv').config();

const emailRoutes = require('./routes/email');

const app = express();
const PORT = process.env.PORT || 3001;

// Dietro un proxy/hosting (Cloudflare, Nginx, ...) per avere l'IP reale
// nel rate-limit e nella verifica Turnstile.
app.set('trust proxy', 1);

// Header di sicurezza di base.
app.use(helmet());

// CORS ristretto agli origin ammessi (lista separata da virgola in ALLOWED_ORIGIN).
// Se non impostato, in dev accetta qualsiasi origin.
const allowedOrigins = (process.env.ALLOWED_ORIGIN || '')
  .split(',')
  .map((s) => s.trim())
  .filter(Boolean);

app.use(
  cors({
    origin: allowedOrigins.length ? allowedOrigins : true,
    methods: ['GET', 'POST'],
  }),
);

// Limite dimensione body: un form di contatto non ha bisogno di più di così.
app.use(express.json({ limit: '16kb' }));

app.get('/api/health', (req, res) => {
  res.json({ ok: true, message: 'Server is running' });
});

app.use('/api/email', emailRoutes);

app.listen(PORT, () => {
  console.log(`Server in ascolto su http://localhost:${PORT}`);
});
