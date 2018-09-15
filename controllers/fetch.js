// Controller for our scraper
// ============================
let db = require("../models");
let scrape = require("../scripts/scrape");

// Fancy create method
module.exports = {
    scrapeArticles: function(req, res) {
        // scrape NPR
        return scrape()
            .then(function(articles){
                return db.Article.create(articles);
            })
            .then(function(dbArticle){
                if (dbArticle.length === 0) {
                    res.json({
                      message: "No new articles today. Check back tomorrow!"
                    });
                  }
                else {
                res.json({
                    message: "Added " + dbArticle.length + " new articles!"
                });
            }
        })
        .catch(function(err) {
            console.log(err)
        });
    }
};