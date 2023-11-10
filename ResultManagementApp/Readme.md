# Result Management Application

- A Result Managment Application using HTML, CSS, JavaScript and Node.
- Two types of users (Students and Teachers) can login to application by clicking a buttons respectively on homepage.
- Students can enter their roll number and date of birth to view their result.
- If roll number and D.O.B. does not match, an error is displayed on screen.
- Teachers can View all records, add new record, edit and delete the records of student result.



## To Run

- To run the application "VS Code editor" can be used.
- Install some pacakges and dependencies written in "package.json" file.
- Run "npm install" and "npm install nodemon -g".
- Tun run application, type this command in terminal "nodemon app.js".



## Database Setup

- Setup MySQl server in your system
- Download via https://www.mysql.com/downloads/
- Set user to "root"
- Set password to "root"
- If you setup to different user or password, change the same in the "model>students.js" file.
- Same with the Database.
- Some modification is required to set your databse such as "Database", "Table", "Column name".
- Some dependencies is required to install such as "mysql2", "sequelize",etc.
- To check that database is connected successfully, use "testdatabase()" function inside the "app.js" file.
- You have to set up the 'Teacher' table as per the 'teacher model'.
- For example here table name is "teacher" and columns are "id", "username" and "password".
- You have to create the table for the same to login in the "teacher page" to access "teacher dashboard".