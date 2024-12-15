const express = require("express");
const router = express.Router();
const {
  loginController,
  protectedController,
} = require("../controllers/authController");

// Login Route
router.post("/login", loginController);

// Protected Route
router.get("/protected", protectedController);

// Logout Route (no actual implementation needed on the server side for logout, as the client clears the token)
router.post("/logout", (req, res) => {
  res.json({ success: true, message: "Logged out successfully" });
});

module.exports = router;
