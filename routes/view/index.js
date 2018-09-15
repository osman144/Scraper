let router = require("express").Router();
let db = require("../../models");

// This route renders the homepage
router.get("/", function(req,res){
    db.Article
    .find({saved: false})
    .sort({date:-1})
    .then(dbArticles => res.render("index", {articles:dbArticles}))
});

// This route renders the saved handlebars page 
router.get("/saved", function(req,res){
    db.Article
    .find({saved:true})
    .sort({date:-1})
    .then(dbArticles => res.render("saved", {articles:dbArticles}))
});