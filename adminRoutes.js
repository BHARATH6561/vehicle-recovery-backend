
const express = require('express');
const router = express.Router();
const { uploadExcel } = require('../controllers/adminController');

router.post('/upload-excel', uploadExcel);

module.exports = router;
