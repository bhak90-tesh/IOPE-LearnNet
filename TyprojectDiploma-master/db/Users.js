const mongoose = require('mongoose');
const bcrypt = require('bcrypt');  // Import bcrypt for hashing passwords

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },  // Added `required` validation for name
  email: { 
    type: String, 
    required: true, 
    unique: true,  // Ensure email is unique
    lowercase: true,  // Convert emails to lowercase
    trim: true  // Remove leading/trailing whitespace
  },
  password: { 
    type: String, 
    required: true,  // Added `required` validation for password
  },
  verifytoken: String
});

// Middleware to hash the password before saving
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();  // Only hash if password is modified

  try {
    this.password = await bcrypt.hash(this.password, 10);  // Hash password with 10 salt rounds
    next();
  } catch (error) {
    next(error);
  }
});

// Create a method to compare hashed passwords
userSchema.methods.comparePassword = async function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);  // Compare provided password with hashed password
};

module.exports = mongoose.model('User', userSchema);  // Change model name to 'User'
