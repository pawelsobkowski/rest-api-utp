const express = require('express');
const signinController = require('../controllers/signinController');

const router = express.Router();

router.post('/signin', signinController.signin)

module.exports = router;