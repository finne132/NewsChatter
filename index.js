"use strict";

//create the router
var router = require("express").Router();
// grab the local api folder
var apiRoutes = require("./api");
var viewRoutes = require("./view");

// use the routes
router.use("/api", apiRoutes);
router.use("/", viewRoutes);

// export the router 
module.exports = router;