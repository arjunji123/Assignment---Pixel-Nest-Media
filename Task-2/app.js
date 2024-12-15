const express = require("express");
const bodyParser = require("body-parser");
const db = require("./db"); // Import the database connection
// Middleware to parse JSON requests
const app = express();
app.use(bodyParser.json());
// API to add an employee
app.post("/employees", (req, res) => {
  const { name, department, salary } = req.body;

  // SQL query to insert an employee
  const query =
    "INSERT INTO employees (name, department, salary) VALUES (?, ?, ?)";

  db.execute(query, [name, department, salary], (err, results) => {
    if (err) {
      console.error("Error inserting employee:", err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    res.status(201).json({ id: results.insertId, name, department, salary });
  });
});

// API to get employee by ID
app.get("/employees/:id", (req, res) => {
  const { id } = req.params;

  // SQL query to get an employee by ID
  const query = "SELECT * FROM employees WHERE id = ?";

  db.execute(query, [id], (err, results) => {
    if (err) {
      console.error("Error fetching employee:", err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    if (results.length === 0) {
      return res.status(404).json({ error: "Employee not found" });
    }
    res.json(results[0]);
  });
});

// API to update an employee by ID
app.put("/employees/:id", (req, res) => {
  const { id } = req.params;
  const { name, department, salary } = req.body;

  // SQL query to update employee details
  const query =
    "UPDATE employees SET name = ?, department = ?, salary = ? WHERE id = ?";

  db.execute(query, [name, department, salary, id], (err, results) => {
    if (err) {
      console.error("Error updating employee:", err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    if (results.affectedRows === 0) {
      return res.status(404).json({ error: "Employee not found" });
    }
    res.json({ message: "Employee updated successfully" });
  });
});

// API to delete an employee by ID
app.delete("/employees/:id", (req, res) => {
  const { id } = req.params;

  // SQL query to delete an employee
  const query = "DELETE FROM employees WHERE id = ?";

  db.execute(query, [id], (err, results) => {
    if (err) {
      console.error("Error deleting employee:", err);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    if (results.affectedRows === 0) {
      return res.status(404).json({ error: "Employee not found" });
    }
    res.json({ message: "Employee deleted successfully" });
  });
});

// Start the server
app.listen(3000, () => {
  console.log(`Server running on http://localhost:3000`);
});
