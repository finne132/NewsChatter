"use strict";

// require mongoose 
var mongoose = require("mongoose");

// declare mongoose database schema 
var Schema = mongoose.Schema;

// create a new mongoose database schema to store the Headlines 
var headlineSchema = new Schema({
  headline: {
    type: String,
    required: true,
    unique: { index: { unique: true } }
  },
  summary: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  saved: {
    type: Boolean,
    default: false
  }
});
// set the schema to Headline variable
var Headline = mongoose.model("Headline", headlineSchema);

// export Headline variable as a module
module.exports = Headline;