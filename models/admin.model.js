const mongoose = require("mongoose")

const schema = new mongoose.Schema(
{
name: { type:String },
username: { type: String },
password: { type: String },
},
//Fecha de Create y Update//
{
    timestamps : true,
}
);
const Admin= mongoose.model("Admin", schema);

module.exports= Admin;