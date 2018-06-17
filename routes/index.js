// allow this folder to be used as a module 
// and pass all of the subfolder's routes to server.js

var router = require("express").Router();
var apiRoutes = require("./api");
var viewRoutes = require("./view");

router.use("/api", apiRoutes);
router.use("/", viewRoutes);

module.exports = router;