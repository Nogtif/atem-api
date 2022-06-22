const mongoose = require('mongoose');

const animeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  originalTitle: { type: String, default: '' },
  synopsis: { type: String, default: '' },
  type: { type: String, enum: ['MOVIE', 'SERIES'], required: true, default: 'SERIES' },
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
  views: { type: Number, default: 0 }
}, { versionKey: false });

module.exports = mongoose.model('Anime', animeSchema);