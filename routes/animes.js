const router = require('express').Router();
const Anime = require('../models/Anime');

router.get('/', async (req, res) => {
  try {
    const animes = await Anime.find(req.body);
    res.status(200).json(animes);
  } catch(err) {
    res.status(500).send(err);
  }
});

// Finds anime by ID
router.get('/:id', async (req, res) => {
  try {
    const anime = await Anime.findById(req.params.id);
    res.status(200).json(anime);
  } catch(err) {
    res.status(500).send(err);
  }
});

// Create an anime
router.post('/', async (req, res) => {
  try {
    const anime = await Anime.create(req.body);
    res.status(201).json(anime);
  } catch(err) {
    res.status(500).send(err);
  }
});

// Update an anime
router.put('/:id', async (req, res) => {
  try {
    const anime = await Anime.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json(anime);
  } catch(err) {
    res.status(500).send(err);
  }
});

// Delete an anime
router.delete('/:id', async (req, res) => {
  try {
    await Anime.findByIdAndRemove(req.params.id);
    res.status(200).json('The anime has been deleted...');
  } catch(err) {
    res.status(500).send(err);
  }
});

module.exports = router;