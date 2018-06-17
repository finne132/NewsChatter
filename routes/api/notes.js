"use strict";

// require router
var router = require("express").Router();

// import the note controller 
var noteController = require("../../controllers/note");

// router functions for GET, POST, and DELETE
router.get("/:id", noteController.findOne);
router.post("/", noteController.create);
router.delete("/:id", noteController.delete);

// export the routes
module.exports = router;