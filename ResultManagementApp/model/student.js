// Importing Sequelize

const fs = require("fs")

const { Sequelize, DataTypes } = require('sequelize')

const student_sequelize = new Sequelize ('result_management_db', 'anupam26', 'Qwerty@221133', {
    host: 'anupam26sql.mysql.database.azure.com',
    dialect: 'mysql',
    port: 3306,
    dialectOptions: {
        ssl: {
            ca: fs.readFileSync(__dirname+"/DigiCertGlobalRootCA.crt.pem")
        }
    }
});


// Student table
const student = student_sequelize.define('students', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    roll_number: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    date_of_birth: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    marks: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
}, { timestamps: false
});


// exporting the student table and sequelize
module.exports = { student, student_sequelize};