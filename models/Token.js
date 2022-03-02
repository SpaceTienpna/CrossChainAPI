const mongoose = require("mongoose");

const TokenSchema = mongoose.Schema(
  {
    chainId: {
      type: String,
    },
    token: {
      type: String,
    },
    tokenName: {
      type: String,
    },
    tokenSymbol: {
      type: String,
    },
    tokenImage: {
      type: String,
    },
  },
  {
    timestamps: true,
    collection: "token",
  }
);

module.exports = mongoose.model("Token", TokenSchema);
