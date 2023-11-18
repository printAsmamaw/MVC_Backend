const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ecommerce',
});

db.connect((err) => {
    if (err) {
        console.error('Database connection error: ', err);
    } else {
        console.log('Connected to MySQL database');
    }
});

module.exports = db;
