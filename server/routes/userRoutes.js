const express = require("express");
const User = require("../models/userModel.js");
const { registerUser, loginUser } = require("../controllers/authController.js");
const cors = require("cors");

const userRouter = express.Router();
userRouter.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.get("/logout", (req, res) => {
  res.clearCookie("token").json({ message: "Logged out successfully" });
});

module.exports = userRouter;
