// Importing student model
const { request } = require('express');
const student = require('../model/student');



// GET method of student login
const get_student_login = (req, res) => {
    const error = req.flash('error');
    res.render('student_login',{error});
};

// POST method of student login
const post_student_login = async (req, res) => {
    const rollNo = req.body.roll_number;
    const dob = req.body.date_of_birth;
    try {
        const result = await student.student.findOne({ where : {roll_number : rollNo, date_of_birth : dob},
            attributes: ['id', 'roll_number', 'name', 'date_of_birth', 'marks']
        });

        if(!result) {
            // const error = req.flash('error', 'Try Again, Login with correct details');
            res.render('student_login', {error : "wrong"});
        }
        else {
            res.render('student_result', {student : result});
        }
    }
    catch(error) {
        console.log(error);
        res.redirect('/student/login');
    }
};


module.exports = {get_student_login, post_student_login}