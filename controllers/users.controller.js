const User = require ("../models/user.model");

module.exports.create = (req,res) => {
    res.render("users/newUser");
};
module.exports.doCreate = (req,res) => {
    User.create({
        name: req.body.name,
        username: req.body.username,
        password: req.body.password,
    })
    .then (() => {
     res.redirect ("/login")
    })
    .catch(next);
};
