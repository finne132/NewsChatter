"use strict";

// data model for notes/comments left by users 

// require mongoose 
var mongoose = require("mongoose");

// declare schema
var Schema = mongoose.Schema;

// create new mongo schema for notes/comments in the database 
var noteSchema = new Schema({
    // associate notes with unique headline ids to prevent duplicates 
  _headlineId: {
    type: Schema.Types.ObjectId,
    ref: "Headline"
  },
  date: {
    type: Date,
    default: Date.now
  },
  noteText: String
});

// set db model to note variable 
var Note = mongoose.model("Note", noteSchema);

// export note as a module
module.exports = Note;