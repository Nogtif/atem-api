const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  mail: { type: String, required: true, unique: true },
  avatar: { type: String, default: '' },
  rank: { type: Number, default: 1 }
}, { versionKey: false });

module.exports = mongoose.model('User', userSchema);