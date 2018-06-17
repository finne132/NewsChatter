"use strict";

// Require all dependencies
var express = require("express");
var exphbs = require("express-handlebars");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");

// Set up port for Heroku deployment and localhost testing 
var PORT = process.env.PORT || 8080;

// Require local routes folder - includes handlebars stuff
var routes = require("./routes");

// Declare express
var app = express();

// set public folder as the static directory
app.use(express.static("public"));

// declare handlebars, connect it to express
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// declare bodyParser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// set the routes
app.use(routes);

// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

// Set mongoose to leverage built in JavaScript ES6 Promises
// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI);


// turn on the app and listen for a connection
app.listen(PORT, function() {
  console.log("NewChatter has started, app is now listening on port: " + PORT);
});