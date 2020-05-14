const express = require('express');
const eventController = require('../controllers/eventController');

const router = express.Router();

router.post('/event', eventController.addEvent);
router.get('/events', eventController.events);

module.exports = router;