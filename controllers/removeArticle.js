var db = require('../models');

module.exports = {
    removeAllArticlesDB: function (req, res) {
        db.Article.remove({}).then(function(dbArticle){
            //Empty json
            res.json(dbArticle)
            console.log('Removed')
            // res.render('index',{result: dbArticle})
        }).catch(function(err){
            // If an error occurred, send it to the client
            res.json(err)
        })
    },
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

}