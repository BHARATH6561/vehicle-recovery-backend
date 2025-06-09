
const mongoose = require('mongoose');

const letterRequestSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  vehicleNumber: String,
  letterTemplate: { type: mongoose.Schema.Types.ObjectId, ref: 'LetterTemplate' },
  station: String,
  city: String,
  pincode: String,
  pdfUrl: String,
  envelopeUrl: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('LetterRequest', letterRequestSchema);
