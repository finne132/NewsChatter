"use strict";
// api routes are separated from views routes. api routes consist of fetch, notes/comments, and headlines 

// require router
var router = require("express").Router();

// require fetch api function
var fetchRoutes = require("./fetch");
//require note routes
var noteRoutes = require("./notes");
// require headline routes
var headlineRoutes = require("./headlines");

// set up fetch note and headlines for the api
router.use("/fetch", fetchRoutes);
router.use("/notes", noteRoutes);
router.use("/headlines", headlineRoutes);

// export the api router
module.exports = router;