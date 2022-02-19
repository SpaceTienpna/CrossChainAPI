var express = require("express");
const User = require("../models/User");
var router = express.Router();
const Web3 = require("web3");
var web3 = new Web3(Web3.givenProvider);

/* GET users listing. */
router.get("/", async (req, res, next) => {
  const users = await User.find();
  return res.status(200).json({users});
});



module.exports = router;
