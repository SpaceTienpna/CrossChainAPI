const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    address:{
        type: String,
    },
    net:{
        type: String,
    }
}, {
    timestamps: true,
    collection: "user"
});

module.exports = mongoose.model("User", UserSchema);