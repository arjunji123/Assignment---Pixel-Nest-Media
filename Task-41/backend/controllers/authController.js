const jwt = require("jsonwebtoken");

// Dummy user data with plain text password
const users = [
  {
    id: 1,
    username: "admin",
    password: "123456", // Plain text password
  },
];

// Login Controller
const loginController = (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res
      .status(400)
      .json({ success: false, message: "Username and password are required" });
  }

  const user = users.find((u) => u.username === username);

  if (!user) {
    return res
      .status(400)
      .json({ success: false, message: "Invalid credentials" });
  }

  // Direct password comparison (No hashing)
  if (user.password !== password) {
    return res
      .status(400)
      .json({ success: false, message: "Invalid credentials" });
  }

  // Generate JWT token
  const token = jwt.sign(
    { id: user.id, username: user.username },
    "mySuperSecretKey123",
    { expiresIn: "1h" }
  );
  res.json({ success: true, token });
};

// Protected Route Controller
const protectedController = (req, res) => {
  const token = req.headers["authorization"];

  if (!token) return res.status(403).json({ message: "No token provided" });

  // Verify token
  jwt.verify(token, "mySuperSecretKey123", (err, decoded) => {
    if (err)
      return res.status(500).json({ message: "Failed to authenticate token" });

    req.userId = decoded.id;
    req.username = decoded.username;
    res.json({
      message: "Protected content accessed!",
      user: { id: req.userId, username: req.username },
    });
  });
};

module.exports = {
  loginController,
  protectedController,
};
