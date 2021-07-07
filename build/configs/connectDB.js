"use strict";

var _mysql = require("mysql2");

var _mysql2 = _interopRequireDefault(_mysql);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('dotenv').config();

var connection = _mysql2.default.createConnection({
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD
});

// Check Connection

connection.connect(function (err) {
    if (err) throw err;
    console.log("Database Connected successfully");
});

module.exports = connection;
//# sourceMappingURL=connectDB.js.map