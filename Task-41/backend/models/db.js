const mysql = require("mysql2/promise");

const connectDB = async () => {
  try {
    const db = await mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "",
      database: "inventory_db",
    });

    console.log("Database connected successfully!");
    return db;
  } catch (error) {
    console.error("Database connection error:", error);
    process.exit(1); // Exit process if database connection fails
  }
};

module.exports = connectDB;
