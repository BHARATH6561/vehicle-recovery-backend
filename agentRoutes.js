
const express = require('express');
const router = express.Router();
const { getAgentDashboard } = require('../controllers/agentController');

router.get('/dashboard', getAgentDashboard);

module.exports = router;
