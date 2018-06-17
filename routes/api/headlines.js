"use strict";

// require router
var router = require("express").Router();

// require the headlines controller
var headlineController = require("../../controllers/headline");


// headlines functions for GET, DELETE, and PUT
router.get("/", headlineController.findAll);
router.delete("/:id", headlineController.delete);
router.put("/:id", headlineController.update);

// export the headlines routes to the router
module.exports = router;