const mongoose = require("mongoose")

const schema = new mongoose.Schema(
{
name: {type:String},
username: {type:String},
password: {type:String},
avatarURL: {type:String }
},
//Fecha de creación y actualización//
{
    timestamps : true,
}
);
const User= mongoose.model("User", schema)

module.exports= User;