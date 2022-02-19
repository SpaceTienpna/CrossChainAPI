const express = require("express");
const router = express.Router();
const User = require("../models/User");

/* GET home page. */
router.get("/", async (req, res, next) => {
  const users = await User.find();
  return res.status(200).json(users);
});

module.exports = router;
