var db = require('../models');

module.exports = {
    removeDB: function (req, res) {
        db.Article.remove({}).then(function(dbArticle){
            //Empty json
            res.json(dbArticle)
            console.log('Removed')
            // res.render('index',{result: dbArticle})
        }).catch(function(err){
            // If an error occurred, send it to the client
            res.json(err)
        })
    }

}