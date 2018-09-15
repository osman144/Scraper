let db = require('../models');

module.exports = {
    // Find all articles, sort them by date, send them back to the user
    findAll: function(req,res){
        db.Article
        .find(req.query)
        .sort({date:-1})
        .then(dbArticle => res.json(dbArticle))
    },

    // Remove one article from database
    removeOneArticleDB: function(req, res) {
        db.Article
        .findOneAndUpdate({ _id: req.params.id }, { saved:false }, { new: true })
        .then(dbArticle => res.json(dbArticle), console.log(`Removed ${dbArticle}`))
        .catch(err => res.json(err))
    },

    // Remove all articles from database
    removeAllArticlesDB: function (req, res) {
        db.Article
        .remove({})
        .then(dbArticle => res.json(dbArticle), console.log(`Removed ${dbArticle}`))
        .catch(err => res.json(err))
    },

}