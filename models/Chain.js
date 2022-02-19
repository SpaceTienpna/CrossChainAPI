const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    chainId:{
        type: String,
    },
    chainName:{
        type: String,
    },
    currency:{
        type: String
    }
}, {
    timestamps: true,
    collection: "chain"
});

module.exports = mongoose.model("Chain", UserSchema);