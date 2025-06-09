
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  role: { type: String, enum: ['superadmin', 'admin', 'agent'], required: true },
  active: { type: Boolean, default: true },
  photo: String,
  aadhaar: String,
  deviceId: String
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
