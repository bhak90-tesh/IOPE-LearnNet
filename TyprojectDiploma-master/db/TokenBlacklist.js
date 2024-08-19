const mongoose = require('mongoose');

const tokenBlacklistSchema = new mongoose.Schema({
  token: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now, expires: '2h' } // Tokens will automatically be removed after 2 hours
});

module.exports = mongoose.model('TokenBlacklist', tokenBlacklistSchema);
