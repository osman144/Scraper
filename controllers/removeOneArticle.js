var db = require("../models");

module.exports = {
    removeOneDB: function(req, res) {
        db.Article.findOneAndUpdate({ _id: req.params.id }, { saved:false }, { new: true }).then(function(dbArticle) {
            // If able to successfully delete an Article, send it back to the client
            console.log(dbArticle)
            res.json(dbArticle);
        })
        .catch(function(err) {
            // If an error occurred, send it to the client
            res.json(err);
        });
    }
};
