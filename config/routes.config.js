const express = require ("express");
const router = express.Router();
const tweets = require ("../controllers/tweets.controller");
const users = require ("../controllers/users.controller");

router.get ("/tweets/new", tweets.create);
router.post ("/tweets", tweets.doCreate);
router.get ("/tweets", tweets.list);
router.get ("/tweets/:id", tweets.detail);
router.get ("/tweets/:id/edit", tweets.edit);
router.post ("/tweets/:id/doEdit", tweets.doEdit);
router.post ("/tweets/:id/delete", tweets.delete);

router.get ("/users/newUser", users.create);
router.post("/users/", users.doCreate);


router.get("/", (req, res) => res.redirect("tweets"));

module.exports = router;