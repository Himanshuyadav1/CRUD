const express = require('express');
const router = express.Router();
const StudentController = require('../controllers/studentController');

router.get('/', StudentController.getHomePage);

router.get('/edit', StudentController.getEditPage);

module.exports = router;