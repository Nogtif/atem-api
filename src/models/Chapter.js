const mongoose = require('mongoose');

/**
 * g
 */
const chapterSchema = new mongoose.Schema({
  reference: { type: String, required: true },
  title: { type: String, required: true }
}, { versionKey: false });

module.exports = mongoose.model('Chapter', chapterSchema);