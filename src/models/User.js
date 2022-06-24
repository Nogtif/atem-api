const mongoose = require('mongoose');
const schema = mongoose.Schema;

/**
 * User Schema
 *
 * Defines fields and its validations and constraints.
 */
const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  avatar: { type: String, default: '' },
  rank: { type: Number, default: 1 },
  favorites: [{ type: schema.Types.ObjectId, ref: 'Manga' }]
});

module.exports = mongoose.model('User', userSchema);
