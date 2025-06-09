
const mongoose = require('mongoose');

const letterTemplateSchema = new mongoose.Schema({
  admin: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  name: String,
  templatePdfUrl: String
});

module.exports = mongoose.model('LetterTemplate', letterTemplateSchema);
