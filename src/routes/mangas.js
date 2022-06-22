const router = require('express').Router();
const Manga = require('../models/Manga');

router.get('/', async (req, res) => {
  try {
    const mangas = await Manga.find(req.body);
    res.status(200).json(mangas);
  } catch(err) {
    res.status(500).send(err);
  }
});

// Finds manga by ID
router.get('/:id', async (req, res) => {
  try {
    const manga = await Manga.findById(req.params.id);
    res.status(200).json(manga);
  } catch(err) {
    res.status(500).send(err);
  }
});

// Create an manga
router.post('/', async (req, res) => {
  try {
    const manga = await Manga.create(req.body);
    res.status(201).json(manga);
  } catch(err) {
    res.status(500).send(err);
  }
});

// Update an manga
router.put('/:id', async (req, res) => {
  try {
    const manga = await Manga.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json(manga);
  } catch(err) {
    res.status(500).send(err);
  }
});

// Delete an manga
router.delete('/:id', async (req, res) => {
  try {
    await Manga.findByIdAndRemove(req.params.id);
    res.status(200).json('The manga has been deleted...');
  } catch(err) {
    res.status(500).send(err);
  }
});

module.exports = router;