const mongoose = require("mongoose")

const schema = new mongoose.Schema(
{
message: { type: String },
userCreate: {type: mongoose.Schema.Types.ObjectId, ref: "User"},
},
//Fecha de Create y Update//
{
    timestamps : true,
}
);
const Tweet = mongoose.model("Tweet", schema);

module.exports= Tweet;