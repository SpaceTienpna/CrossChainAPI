var express = require("express");
const req = require("express/lib/request");
const res = require("express/lib/response");
const Pair = require("../models/Pair");
var router = express.Router();

/* GET pairs listing. */
router.get("/", async (req, res, next) => {
  const pairs = await Pair.find();
  return res.status(200).json({ pairs });
});

router.get("/pairChain", async (req, res, next) => {
  const { chain } = req.query;
  const pairs = await Pair.find({
    chain_1: chain,
  });
  return res.status(200).json({ result: pairs });
});

router.get("/pair-existed", async (req, res, next) => {
  const { chain, token } = req.query;
  const pairs = await Pair.find({
    token_1: token,
    chain_1: chain,
  });
  return res.status(200).json({ result: pairs });
});

router.get("/getPair", async (req, res, next) => {
  const { token, chain1, chain2 } = req.query;
  const pair = await Pair.findOne({
    token_1: token,
    chain_1: chain1,
    chain_2: chain2,
  });
  return res.status(200).json(pair);
});

router.post("/", async (req, res, next) => {
  const { token1, token2, chain1, chain2 } = req.body;
  const dto = new Pair({
    token_1: token1,
    token_2: token2,
    chain_1: chain1,
    chain_2: chain2,
    isReverse: false,
  });

  const reverse = MakingReverse(token1, token2, chain1, chain2);
  await dto.save();
  await reverse.save();
  return res.status(200).json({message: "Create pair successfully!!"});
});


const MakingReverse = (token1, token2, chain1, chain2) => {
   return new Pair({
     token_1: token2,
     token_2: token1,
     chain_1: chain2,
     chain_2: chain1,
     isReverse: true
   });
}
module.exports = router;
