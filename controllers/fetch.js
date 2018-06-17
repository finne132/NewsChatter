"use strict"; 

// fetch controller
// require the database models
var db = require("../models");

// require the scraping script 
var scrape = require("../scripts/scrape");

// export the results of scraping 
module.exports = {
  scrapeHeadlines: function(req, res) {
    return scrape()
      .then(function(articles) {
        return db.Headline.create(articles);
      })
      .then(function(dbHeadline) {
        if (dbHeadline.length === 0) {
          res.json({
            message: "No results were returned"
          });
        }
        else {
          res.json({
            message: "Success: " + dbHeadline.length + " articles were added to the database"
          });
        }
      })
      .catch(function(err) {
        res.json({
          message: "Search complete"
        });
      });
  }
};