const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const weekSchema = new Schema({
  sales: { type: Number, required: true },
  ecomm: { type: Number, required: true },
  social: { type: Number, required: true },
  ads: { type: Number, required: true },
  other: { type: Number, required: true },
  date: { type: Date, required: true },
}, {
  timestamps: true,
});

const Week = mongoose.model('Week', weekSchema);

module.exports = Week;