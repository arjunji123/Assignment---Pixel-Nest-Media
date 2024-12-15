const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./models/db");
const productRoutes = require("./routes/productRoutes");
const authRoutes = require("./routes/authRoutes");

const startServer = async () => {
  const app = express();
  const port = 5000;

  // Middleware
  app.use(cors({ methods: ["GET", "POST", "PUT", "DELETE"] }));
  app.use(bodyParser.json());

  // Connect to the database
  const db = await connectDB();

  // Routes
  app.use("/api", productRoutes(db));
  app.use("/api", authRoutes);

  // Start the server
  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });
};

startServer();
