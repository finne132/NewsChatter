"use strict"; 

// require router
var router = require("express").Router();

// import the controller for fetch functions
var fetchController = require("../../controllers/fetch");


// declare the / "get" route for fetching 
router.get("/", fetchController.scrapeHeadlines);

// export the fetch routes to the router
module.exports = router;