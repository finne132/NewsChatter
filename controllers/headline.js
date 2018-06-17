"use strict";

// require the database models folder 
var db = require("../models");

// export headline database query functions as a module 
module.exports = {
    // this function gets all the headlines from the database 
  findAll: function(req, res) {
    db.Headline
    // get all articles 
      .find(req.query)
      // sort all articles descending by date
      .sort({ date: -1 })
      // then, respond with headlines as json 
      .then(function(dbHeadline) {
        res.json(dbHeadline);
      });
  },
  // function to delete a news article/headline from the database
  delete: function(req, res) {
    db.Headline.remove({ _id: req.params.id }).then(function(dbHeadline) {
        // respond with headlines as json
      res.json(dbHeadline);
    });
  },
  // function to find and update an article 
  update: function(req, res) {
    db.Headline.findOneAndUpdate({ _id: req.params.id }, { $set: req.body }, { new: true }).then(function(dbHeadline) {
    // respond with headlines as json
      res.json(dbHeadline);
    });
  }
};