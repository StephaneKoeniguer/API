const mysql = require("mysql2");

//BDD
const pool = mysql.createPool({
    host: "localhost",
    user: "",
    database: "api",
    password: "",
    port: 3306,
    namedPlaceholders: true
});

module.exports = pool.promise();
