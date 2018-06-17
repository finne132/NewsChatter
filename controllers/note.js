"use strict";

// require the db models folder to grab the Note model
var db = require("../models");

// database functions for getting, creating, and deleting comments/notes
module.exports = {
  findOne: function(req, res) {
    db.Note
      .findOne(req.query)
      .then(function(dbNote) {
          // respond with notes from db
        res.json(dbNote);
    });
  },
  create: function(req, res) {
    db.Note
      .create(req.body)
      .then(function(dbNote) {
          // respond with db create
        res.json(dbNote);
    });
  },
  delete: function(req, res) {
    db.Note
      .remove({ _id: req.params.id })
      .then(function(dbNote) {
          // respond with db delete
        res.json(dbNote);
    });
  }
};