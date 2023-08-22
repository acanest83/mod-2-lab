const User = require ("../models/user.model");
const Tweet = require ("../models/tweet.model");
module.exports.list = (req, res, next) => {
    Tweet.find()
    .populate("userCreate")
    .then ((tweets) => {
        res.render("tweets/list", {tweets});
    })
    .catch (() => {});
};

module.exports.detail = (req, res, next) => {
   Tweet.findById(req.params.id)
   .then((tweet) => {
    res.render("tweets/detail", {tweet});
   })
   .catch (() => {});
};

module.exports.create = (req, res, next) => {
    res.render("tweets/new");
};

module.exports.doCreate = (req, res, next) => {
    Tweet.create(req.body)
     .then (()=> {
        res.redirect("/tweets");
     }) 
    .catch(next);    
};

module.exports.edit = (req, res, next) => {
    res.send("TO DO TWEETS edit");
};

module.exports.doEdit = (req, res, next) => {
    res.send("TO DO TWEETS Do Edit");
};

module.exports.delete = (req, res, next) => {
    res.render("TO DO TWEETS Delete");
};