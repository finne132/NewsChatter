"use strict";

// view routing is separated from api routing for simplicty

// require router
var router = require("express").Router();

// route for / - render home.handlebars
router.get("/", function(req, res) {
  res.render("home");
});

// route for /saved path - render saved.handlebars
router.get("/saved", function(req, res) {
  res.render("saved");
});

// export the second router
module.exports = router;