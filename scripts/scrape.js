"use strict";

// scraper script that actually scrapes the NYTimes site based on the HTML tags I identified as being relevant 
// This script gets called by the "fetch" controller to return results 

// Write the script here ---------------

// reference https://medium.com/@adinugroho/webscraping-with-nodejs-and-cheerio-c3971611736a

// require axios 
var axios = require("axios");
// require cheerio 
var cheerio = require("cheerio");

var scrape = function() {
    return axios.get("http://www.nytimes.com").then(function(res) {
      var $ = cheerio.load(res.data);
      var articles = [];
      $(".theme-summary").each(function(i, element) {
  
        var head = $(this)
          .children(".story-heading")
          .text()
          .trim();
  
        var url = $(this)
          .children(".story-heading")
          .children("a")
          .attr("href");
  
        var sum = $(this)
          .children(".summary")
          .text()
          .trim();
  
        if (head && sum && url) {
  
          var headNeat = head.replace(/(\r\n|\n|\r|\t|\s+)/gm, " ").trim();
          var sumNeat = sum.replace(/(\r\n|\n|\r|\t|\s+)/gm, " ").trim();
  
          var dataToAdd = {
            headline: headNeat,
            summary: sumNeat,
            url: url
          };
  
          articles.push(dataToAdd);
        }
      });
      return articles;
    });
  };
  
  
  // export the module
  module.exports = scrape;

// End Scraper Script ------------------

