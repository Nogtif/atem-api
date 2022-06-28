const mongoose = require('mongoose');
const schema = mongoose.Schema;

/**
 * Season Schema
 *
 * Defines fields and its validations and constraints.
 */
const seasonSchema = new mongoose.Schema({
  reference: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String },
  episodes: [{ type: schema.Types.ObjectId, ref: 'Episode' }]
}, { versionKey: false });

module.exports = mongoose.model('Season', seasonSchema);
