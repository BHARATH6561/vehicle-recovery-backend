
const mongoose = require('mongoose');

const vehicleDataSchema = new mongoose.Schema({
  vehicleNumber: String,
  chassisNumber: String,
  engineNumber: String,
  loanNumber: String,
  data: Object,
  uploadedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  sharedWith: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
}, { timestamps: true });

module.exports = mongoose.model('VehicleData', vehicleDataSchema);
