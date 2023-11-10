const express = require('express');
const path = require('path');
const { student_sequelize } = require('./model/student');  // importing student model
const { teacher_sequelize } = require('./model/teacher'); // importing teacher model
const flash = require('connect-flash');
const session = require('express-session')

const app = express();

const port = 8080;


// testing connection of student table
async function test_student() {
    try {
        await student_sequelize.authenticate();
        console.log('Student Table Connection Successful');
    }
    catch(err) {
        console.error('Student Table Connection Unsuccessful', err);
    }
}

test_student();

// testing connection of Teacher Table
async function test_teacher() {
    try {
        await teacher_sequelize.authenticate();
        console.log('Teacher table Connection Successful ');
    }
    catch(err) {
        console.error('Teacher table Connection Unsuccessful ', err);
    }
}

test_teacher();



// Register view engine
app.set('view engine', 'ejs');

// middleware and static files
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(session({
    secret : 'ResultManagementApp',
    cookie : {maxAge : 60000},
    saveUninitialized : false,
    resave : false
}));
app.use(flash());


// Getting student route
const student_route = require('./routes/student_routes');
app.use('/student', student_route);

// Getting Teacher route
const teacher_route = require('./routes/teacher_routes');
app.use('/teacher', teacher_route);



// Home or main page
app.get('/', (req, res) => {
    res.render('index');
});



// Start the server and listen for incoming requests on the specified port
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
