const express = require('express');
const router = express.Router();
const StudentController = require('../controllers/studentController');

router.get('/', StudentController.getAllDoc);
router.post('/', StudentController.createDoc);
router.get('/edit/:id', StudentController.editDocById);
router.post('/delete/:id', StudentController.deleteDocById);
router.post('/update/:id', StudentController.updateDocById)

module.exports = router;