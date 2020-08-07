const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const weekSchema = new Schema({
  username: { type: String, required: true },
  category: { type: String, required: true },
  amount: { type: Number, required: true },
  description: { type: String, required: true },
  rate: { type: Number, required: true },
  date: { type: Date, required: true },
}, {
  timestamps: true,
});

const Week = mongoose.model('Exercise', weekSchema);

module.exports = Week;