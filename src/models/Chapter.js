const mongoose = require('mongoose');

/**
 * Chapter Schema
 *
 * Defines fields and its validations and constraints.
 */
const chapterSchema = new mongoose.Schema({
  reference: { type: String, required: true },
  title: { type: String, required: true },
  date: { type: Date, default: Date.now },
  views: { type: Number, default: 0 },
  link: { type: String }
}, { versionKey: false });

module.exports = mongoose.model('Chapter', chapterSchema);
