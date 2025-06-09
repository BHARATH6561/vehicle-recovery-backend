
const express = require('express');
const router = express.Router();
const { requestLetter } = require('../controllers/letterController');

router.post('/request', requestLetter);

module.exports = router;
