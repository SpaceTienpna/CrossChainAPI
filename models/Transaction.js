const mongoose = require("mongoose");

const TransactionSchema = mongoose.Schema({
    transactionHash: {
        type: String,
    },
    chainId:{
        type: String,
    },
    fromAddress:{
        type: String,
    },
    toAddress:{
        type: String
    },
    
}, {
    timestamps: true,
    collection: "chain"
});

module.exports = mongoose.model("Chain", UserSchema);