// Importing sequelize
const fs = require("fs")

const { Sequelize, DataTypes } = require('sequelize')

const teacher_sequelize = new Sequelize ('result_management_db', 'anupam26', 'Qwerty@221133', {
    host: 'anupam26sql.mysql.database.azure.com',
    dialect: 'mysql',
    port: 3306,
    dialectOptions: {
        ssl: {
            ca: fs.readFileSync(__dirname+"/DigiCertGlobalRootCA.crt.pem")
        }
    }
});

// Teacher table
const teacher = teacher_sequelize.define('teachers', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, { timestamps: false
});


// Exporting teacher table and sequelize
module.exports = { teacher, teacher_sequelize};