var express = require("express");
const Token = require("../models/Token");
var router = express.Router();

/* GET users listing. */
router.get("/", async (req, res, next) => {
  const tokens = await Token.find();
  return res.status(200).json({ tokens });
});

router.get("/getTokenByChainId", async (req, res, next) => {
  const tokens = await Token.find({
    chainId: req.query.chain,
  });
  return res.status(200).json({ tokens });
});

router.post("/", async (req, res, next) => {
  const { chainId, token, tokenName, tokenSymbol, tokenImage } = req.body;
  const dto = new Token({
    chainId,
    token,
    tokenName,
    tokenSymbol,
    tokenImage,
  });
  const check = await CheckTokenExisted(dto.chainId, dto.token)
  if (check) {
    return res
      .status(200)
      .json({ message: "This token already existed in the database!!" });
  }
  await dto.save();
  return res.status(200).json({ message: "Create token success" });
});

const CheckTokenExisted = async (chainid, token) => {
  const tokens = await Token.find({
    chainId: chainid,
    token: token,
  });

  if (tokens.length > 0) return true;
  return false;
};

module.exports = router;
