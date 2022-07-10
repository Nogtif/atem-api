const router = require('express').Router();
const Anime = require('../models/Anime');

/**
 * REST Endpoint allowing retrieving all the animes.
 * The retrieved animes will be converted to [Anime] before being returned.
 * If no animes are retrieved, an empty list will be returned.
 *
 * @return a list of [Anime] matching with all animes retrieved.
 */
router.get('/', async (req, res, next) => {
  Anime.find((error, animes) => {
    return !error ? res.status(200).json(animes) : next(error);
  });
});

/**
 * REST Endpoint allowing retrieving a particular anime from its reference.
 * If no matching anime can be found, an information about encountered error will be returned.
 * Otherwise, the anime will be retrieved and converted to [Anime] before being returned.
 *
 * @param[reference] unique reference of a anime.
 *
 * @return a [Anime] matching with the anime retrieved from the reference.
 */
router.get('/:reference', async (req, res, next) => {
  Anime.findOne({ reference: req.params.reference }, (error, anime) => {
    return !error ? res.status(200).json(anime) : next(error);
  });
});

/**
 * REST Endpoint allowing to create a anime.
 *
 * @param[body] contains all required information to create the anime.
 *
 * @return a [Response] containing the created [Anime] or information about encountered error.
 */
router.post('/', async (req, res, next) => {
  Anime.create(req.body, (error, post) => {
    return !error ? res.status(200).json(post) : next(error);
  });
});

/**
 * REST Endpoint allowing to update a anime with an already known reference.
 * The anime is either created if it can't be found at the provided reference, or it is updated otherwise.
 *
 * @param[reference] unique reference of a anime.
 * @param[body] contains all required information to update the Anime.
 *
 * @return a [Response] containing the updated [Anime] or information about encountered error.
 */
router.put('/:reference', async (req, res, next) => {
  Anime.findByIdAndUpdate(req.params.reference, req.body, (error, anime) => {
    return !error ? res.status(200).json(anime) : next(error);
  });
});

/**
 * REST Endpoint allowing deleting a anime.
 *
 * @param[reference] unique reference of a anime.
 *
 * @return a [Response] containing either no result (if everything went fine) or
 * information about encountered error
 */
router.delete('/:reference', async (req, res, next) => {
  Anime.findByIdAndRemove(req.params.reference, error => {
    return !error ? res.status(200).json('The anime has been deleted...') : next(error);
  });
});

module.exports = router;
