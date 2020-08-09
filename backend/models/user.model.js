const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  business: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
  type: { type: Number, required: true }
});

const User = mongoose.model('User', userSchema);

module.exports = User;