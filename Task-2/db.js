// db.js
const mysql = require("mysql2");

// Create a MySQL connection
const db = mysql.createConnection({
  host: "localhost", // Replace with your MySQL host (e.g., 'localhost')
  user: "root", // Replace with your MySQL username
  password: "", // Replace with your MySQL password
  database: "employee_management", // Replace with your MySQL database name
});

// Connect to the database
db.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err.stack);
    return;
  }
  console.log("Connected to the database");
});

module.exports = db;
