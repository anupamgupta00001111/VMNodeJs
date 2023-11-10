// Importing student model
const { student } = require("../model/student");

// Importing teacher model
const { teacher } = require("..//model/teacher");



// GET method of Teacher login
const get_teacher_login = (req, res) => {
    res.render('teacher_login');
};

// POST method of Teacher login
const post_teacher_login = async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    try {
        const result = await teacher.findOne({ where : {username : username, password : password},
            attributes: ['id', 'username', 'password']
        });

        if(!result) {
            // const error = req.flash('error', 'Try Again, Login with correct details');
            res.render('teacher_login', {error : "wrong"});
        }
        else {
            res.redirect('/teacher/dashboard');
        }
    }
    catch(error) {
        console.log(error);
        res.redirect('/teacher/login');
    }
};



// Get mthod of teacher dashboard
const get_teacher_dashboard = async(req, res) => {
    try {
        const result = await student.findAll({
            attributes: ['id', 'roll_number', 'name', 'date_of_birth', 'marks']
        });
        const error = req.flash('error');
        const success = req.flash('success');
        res.render('teacher_dashboard', {students : result, error, success});
    }
    catch(error) {
        console.log(error);
        req.flash('error', 'Try Again, Login with correct details');
        res.redirect('/');
    } 
};



// get method of teacher to add student details
const get_teacher_add = async(req, res) => {
    res.render('teacher_add');
};

// post method of teacher to add student details
const post_teacher_add = async (req, res) => {
    try {
        const rollNo = req.body.roll_number;
        const name = req.body.name;
        const dob = req.body.date_of_birth;
        const marks = req.body.marks;

        const check = await student.findOne({where : {roll_number : rollNo},
            attributes: ['id', 'roll_number', 'name', 'date_of_birth', 'marks']
        });

        if(check) {
            res.redirect('/teacher/dashboard');
        }

        student.create({
            roll_number : rollNo,
            name : name,
            date_of_birth : dob,
            marks : marks,
        });
        req.flash('error','student added');
        res.redirect('/teacher/dashboard');
    }
    catch(error) {
        console.log(error);
        res.redirect('/teacher/dashboard');
    }
}


// Get method to edit student details by teacher
const get_teacher_edit = async (req, res) => {
    const id = req.params.id
    try {
        const result = await student.findByPk(id,{
            attributes: ['id', 'roll_number', 'name', 'date_of_birth', 'marks']
        });
        res.render('teacher_edit', {student : result});
    }
    catch(error) {
        console.log(error);
        res.redirect('/teacher/dashboard');
    }
};

// Post method to edit students details by teacher
const post_teacher_edit = async (req, res) => {
    try {
        await student.update({
            roll_number : req.body.roll_number,
            name : req.body.name,
            date_of_birth : req.body.date_of_birth,
            marks : req.body.marks,
        },
        { where : {id : req.params.id },
        attributes: ['id', 'roll_number', 'name', 'date_of_birth', 'marks']
    });
    res.redirect('/teacher/dashboard');
    }
    catch(error) {
        console.log(error);
        res.redirect('/teacher/dashboard');
    }
};


//Get method to delete details of student by teacher
const get_teacher_delete = async(req, res) => {
    const id = req.params.id;
    try{
        console.log('hello');
        await student.destroy({ where : {id : id},
            attributes: ['id', 'roll_number', 'name', 'date_of_birth', 'marks']
        });
        req.flash('success','Deleted succesfully');
        res.redirect('/teacher/dashboard');
    }
    catch(error){
        console.log(error);
        res.redirect('/teacher/dashboard');
    }
    res.redirect('/teacher/dashboard');
};



module.exports = { get_teacher_login,
                   post_teacher_login,
                   get_teacher_dashboard,
                   get_teacher_add,
                   post_teacher_add,
                   get_teacher_edit,
                   post_teacher_edit,
                   get_teacher_delete
                 }