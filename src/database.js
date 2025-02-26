const mysql = require ('mysql')

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: "",
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