const express = require('express');
const router = express.Router();
const teacher_controller = require('../controllers/teacher_controller');


router.get('/login', teacher_controller.get_teacher_login);
router.post('/dashboard', teacher_controller.post_teacher_login);

router.get('/dashboard', teacher_controller.get_teacher_dashboard);

router.get('/add', teacher_controller.get_teacher_add);
router.post('/add', teacher_controller.post_teacher_add);

router.get('/edit/:id', teacher_controller.get_teacher_edit);
router.post('/edit/:id', teacher_controller.post_teacher_edit);

router.get('/delete/:id', teacher_controller.get_teacher_delete);


module.exports = router;