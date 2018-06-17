"use strict";

// draw the main page 

$(document).ready(function() {
    // grab the container for the article 
    var articleContainer = $(".article-container");
    // add on click event handlers for the save and search buttons
    $(document).on("click", ".btn.save", handleArticleSave);
    $(document).on("click", ".search-new", handleArticleScrape);

    initPage();

    function initPage() {
      articleContainer.empty();
      $.get("/api/headlines?saved=false").then(function(data) {
        if (data && data.length) {
          renderArticles(data);
        }
        else {
          renderEmpty();
        }
      });
    }

    // draw a panel for each of the articles ahnd append it to the container 
    function renderArticles(articles) {
      var articlePanels = [];
      for (var i = 0; i < articles.length; i++) {
        articlePanels.push(createPanel(articles[i]));
      }
      articleContainer.append(articlePanels);
    }

    function createPanel(article) {
      var panel = $(
        [
          "<div class='panel panel-default'>",
          "<div class='panel-heading'>",
          "<h4>",
          "<a class='article-link' target='_blank' href='" + article.url + "'>",
          article.headline,
          "</a>",
          "<a class='btn btn-success save'>",
          "Save Article",
          "</a>",
          "</h4>",
          "</div>",
          "<div class='panel-body'>",
          article.summary,
          "</div>",
          "</div>"
        ].join("")
      );
      panel.data("_id", article._id);
      return panel;
    }

    function renderEmpty() {
      var emptyAlert = $(
        [
          "<div class='alert alert-warning text-center'>",
          "There are no results to display",
          "</div>",
          "<div class='panel panel-default'>",
          "<div class='panel-body text-center'>",
          "<h4><a class='search-new'>Search</a></h4>",
          "<h4><a href='/saved'>View Saved Articles</a></h4>",
          "</div>",
          "</div>"
        ].join("")
      );
      articleContainer.append(emptyAlert);
    }

    // what to do when the user clicks to save an article 
    function handleArticleSave() {
        // select the current article
      var articleToSave = $(this)
        .parents(".panel")
        .data();
      articleToSave.saved = true;
      $.ajax({
        method: "PUT",
        url: "/api/headlines/" + articleToSave._id,
        data: articleToSave
      }).then(function(data) {
        if (data.saved) {
          initPage();
        }
      });
    }

    function handleArticleScrape() {
      $.get("/api/fetch").then(function(data) {
        initPage();
        bootbox.alert("<h3 class='text-center m-top-80'>" + data.message + "<h3>");
      });
    }
  });