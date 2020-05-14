const express = require('express');
const participantsController = require('../controllers/participantsController');

const router = express.Router();

router.post('/addParticipant', participantsController.addParticipant);

module.exports = router;