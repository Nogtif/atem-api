const mongoose = require('mongoose');
const schema = mongoose.Schema;

/**
 * Season Schema
 *
 * Defines fields and its validations and constraints.
 */
const seasonSchema = new mongoose.Schema({
  reference: { type: String, required: true },
  name: { type: String, required: true },
  chapters: [{ type: schema.Types.ObjectId, ref: 'Chapter' }]
}, { versionKey: false });

module.exports = mongoose.model('Season', seasonSchema);
