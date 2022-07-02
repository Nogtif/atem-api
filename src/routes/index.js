const express = require('express');
const mangas = require('./mangas');
const router = express.Router();

/**
 * Main Resource
 * Just a little title :)
 */
router.get('/', (req, res) => res.send('Atem API 1.0'));

/**
 * Manga Resource
 * Resource allowing managing animes.
 */
router.use('/mangas', mangas);

/**
 * Health
 * Check the status of the API.
 */
router.get('/health', (req, res) => {
  const healthcheck = {
    uptime: process.uptime(),
    message: 'OK',
    timestamp: Date.now()
  };
  res.send(JSON.stringify(healthcheck));
});

module.exports = router;
