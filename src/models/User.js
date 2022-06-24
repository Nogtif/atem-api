const mongoose = require('mongoose');

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
  rank: { type: Number, default: 1 }
});

module.exports = mongoose.model('User', userSchema);
