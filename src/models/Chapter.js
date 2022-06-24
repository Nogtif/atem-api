const mongoose = require('mongoose');

/**
 * Chapter Schema
 *
 * Defines fields and its validations and constraints.
 */
const chapterSchema = new mongoose.Schema({
  reference: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String },
  date: { type: Date, default: Date.now },
  pages: { type: Array, default: [] },
  views: { type: Number, default: 0 },
  language: { type: String, default: 'fr' }
}, { versionKey: false });

module.exports = mongoose.model('Chapter', chapterSchema);
