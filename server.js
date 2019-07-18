const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const urlSchema = new Schema({
  address: { type: String, required: true },
  shortUrl: { type: Number, required: true },
});

module.exports = mongoose.model('Url', urlSchema);
