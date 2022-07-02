const router = require('express').Router();
const Manga = require('../models/Manga');

/**
 * REST Endpoint allowing retrieving all the mangas.
 * The retrieved mangas will be converted to [Anime] before being returned.
 * If no mangas are retrieved, an empty list will be returned.
 *
 * @return a list of [Manga] matching with all mangas retrieved.
 */
router.get('/', async (req, res, next) => {
  Manga.find((error, mangas) => {
    return !error ? res.status(200).json(mangas) : next(error);
  });
});

/**
 * REST Endpoint allowing retrieving a particular manga from its reference.
 * If no matching manga can be found, an information about encountered error will be returned.
 * Otherwise, the manga will be retrieved and converted to [Manga] before being returned.
 *
 * @param[reference] unique reference of a manga.
 *
 * @return a [Manga] matching with the manga retrieved from the reference.
 */
router.get('/:reference', async (req, res, next) => {
  Manga.findById(req.params.reference, (error, manga) => {
    return !error ? res.status(200).json(manga) : next(error);
  });
});

/**
 * REST Endpoint allowing to create a manga.
 *
 * @param[body] contains all required information to create the manga.
 *
 * @return a [Response] containing the created [Manga] or information about encountered error.
 */
router.post('/', async (req, res, next) => {
  Manga.create(req.body, (error, post) => {
    return !error ? res.status(200).json(post) : next(error);
  });
});

/**
 * REST Endpoint allowing to update a manga with an already known reference.
 * The manga is either created if it can't be found at the provided reference, or it is updated otherwise.
 *
 * @param[reference] unique reference of a manga.
 * @param[body] contains all required information to update the Manga.
 *
 * @return a [Response] containing the updated [Manga] or information about encountered error.
 */
router.put('/:reference', async (req, res, next) => {
  Manga.findByIdAndUpdate(req.params.reference, req.body, (error, manga) => {
    return !error ? res.status(200).json(manga) : next(error);
  });
});

/**
 * REST Endpoint allowing deleting a manga.
 *
 * @param[reference] unique reference of a manga.
 *
 * @return a [Response] containing either no result (if everything went fine) or
 * information about encountered error
 */
router.delete('/:reference', async (req, res, next) => {
  Manga.findByIdAndRemove(req.params.reference, error => {
    return !error ? res.status(200).json('The manga has been deleted...') : next(error);
  });
});

module.exports = router;
