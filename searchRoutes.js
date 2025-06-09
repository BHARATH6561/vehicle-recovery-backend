
const express = require('express');
const router = express.Router();
const { vehicleSearch } = require('../controllers/searchController');

router.get('/vehicle', vehicleSearch);

module.exports = router;
