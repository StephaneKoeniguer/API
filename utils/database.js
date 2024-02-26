const mysql = require("mysql2");

//BDD
const pool = mysql.createPool({
    host: "localhost",
    user: "stephane",
    database: "api",
    password: "Stephane2304",
    port: 3306,
    namedPlaceholders: true
});

module.exports = pool.promise();
