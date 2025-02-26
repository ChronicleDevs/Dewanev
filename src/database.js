const mysql = require ('mysql')

const connection = mysql.createConnection({
    host: process.env.DB_URI,
    user: process.env.DB_USER,
    password: process.env.DB_PWD,
    database: process.env.DB_NAME
});
connection.connect((err) => {
    if(err) {
        console.log(err);
    } else {
        console.log("Connected to MySQL");
    }
});

module.exports = connection;
