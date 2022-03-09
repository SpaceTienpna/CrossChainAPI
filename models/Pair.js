const mongoose = require("mongoose");

const PairSchema = mongoose.Schema(
  {
    token_1: {
      type: String,
    },
    chain_1: {
      type: String,
    },
    contractTool_1: {
      type: String,
    },
    token_2: {
      type: String,
    },
    chain_2: {
      type: String,
    },
    contractTool_2: {
      type: String,
    },
    isReverse: {
      type: Boolean,
    },
  },
  {
    timestamps: true,
    collection: "pair",
  }
);

module.exports = mongoose.model("Pair", PairSchema);
