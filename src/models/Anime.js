const mongoose = require('mongoose');
const schema = mongoose.Schema;

/**
 * Anime Schema
 *
 * Defines fields and its validations and constraints.
 */
const animeSchema = new mongoose.Schema({
  reference: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  originalTitle: { type: String, default: '' },
  synopsis: { type: String, default: '' },
  type: { type: String, default: '' },
  status: { type: String, enum: ['PENDING', 'IN PROGRESS', 'ENDED'], required: true, default: 'PENDING' },
  author: { type: String, default: '' },
  thumbnail: { type: String, default: '' },
  wallpaper: { type: String, default: '' },
  meta: { type: Object },
  kind: { type: Array },
  duration: { type: Number, default: 0 },
  initialExit: { type: Date, default: Date.now },
  studios: { type: String, default: '' },
  rating: { type: Number, default: 0 },
  views: { type: Number, default: 0 },
  seasons: [{ type: schema.Types.ObjectId, ref: 'Season' }]
}, { versionKey: false });

module.exports = mongoose.model('Anime', animeSchema);
