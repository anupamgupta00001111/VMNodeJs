const express = require('express');
const router = express.Router();
const student_controller = require('../controllers/student_controller');

router.get('/login', student_controller.get_student_login);
router.post('/result', student_controller.post_student_login);

module.exports = router;