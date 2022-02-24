var express = require("express");
const Chain = require("../models/Chain");
var router = express.Router();

/* GET users listing. */
router.get("/", async (req, res, next) => {
  const chains = await Chain.find();
  return res.status(200).json({ chains });
});

router.get("/getByChainId", async (req, res, next) => {
  const { chainId } = req.query;
  const chain = await Chain.findOne({ chainId: chainId });
  if (!chain)
    return res
      .status(200)
      .json({
        chain: { chainId: "0", chainName: "No network found", currency: "N/a" },
      });
  return res.status(200).json({ chain });
});

// ------------ post zone
router.post("/", async (req, res, next) => {
  console.log(req.body);
  for (const element of req.body) {
    const chain = new Chain(element);
    await chain.save();
  }
  // const chain = new Chain({
  //     chainId: "1",
  //     chainName: "Ethereum Mainet",
  //     currency: "ETH"
  // });
  // await chain.save();
  return res.status(200).json("Create success");
});

module.exports = router;
