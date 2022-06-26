const express = require('express');
const mangas = require('./mangas');
const router = express.Router();

/**
 * Manga Resource
 * Resource allowing managing mangas.
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
