const mongoose = require("mongoose")

const schema = new mongoose.Schema(
{
name: { type:String },
username: { type: String },
password: { type: String },
avatarURL: { type: String }
},
//Fecha de Create y Update//
{
    timestamps : true,
}
);
const User= mongoose.model("User", schema);

module.exports= User;