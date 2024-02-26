const mysql = require("mysql2");

//BDD
const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    database: "api"
});

module.exports = pool.promise();
