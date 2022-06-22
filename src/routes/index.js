const express = require('express');
const mangas = require('./mangas');

const router = express.Router();

router.use('/mangas', mangas);

router.get('/', (req, res) => res.send('Sample Node API Version1'));

router.get('/health', (req, res) => {
  const healthcheck = {
    uptime: process.uptime(),
    message: 'OK',
    timestamp: Date.now()
  };
  res.send(JSON.stringify(healthcheck));
});

module.exports = router;