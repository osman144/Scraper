//=======================================
//===========Node Dependancies===========
//***************************************
const express = require ('express');
const exphbs = require ('express-handlebars');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
// Require scraping tool
//Cheerio parses markup
const cheerio = require('cheerio');
//Axios is a promised-based http library, similar to jQuery's Ajax method
//Automatically transforms as JSON data
const axios = require('axios')
const request = require('request');
// Require all models
const db = require("./models");


const PORT = process.env.PORT || 3000;

//Initialize app 
const app = express();


//Handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

// Set mongoose to leverage built in JavaScript ES6 Promises
// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI);

app.get('/', function(req,res){
    res.send('Hello World')
})

//Get route for scraping NPR website
app.get('/scraper', function(req,res){
    //First grab the body with an HTML request
    axios.get('https://www.npr.org/sections/news/').then(function(response){
        //Load onto Cheerio
        let $ = cheerio.load(response.data)

        //Grab the title and link

        $('article h2 p.teaser').each(function(i,element){
            //Save in result object
            let result = {};

            result.title = $(this).children("a").text();
            result.link = $(this).children("a").attr("href");
            // result.blurb = $(this).children("a").text();

            // result.image = $(this).attr('src')
        
            // Create a new Article using the `result` object built from scraping
            db.Article.create(result).then(function(dbArticle) {
                // View the added result in the console
                console.log(dbArticle);
            }).catch(function(err) {
                // If an error occurred, send it to the client
                return res.json(err);
      });
        });

    });

});

// Route for getting all Articles from the db
app.get('/home', function(req,res){
    // Grab every document in the Articles collection
    db.Article.find({}).then(function(dbArticle){
        // res.json(dbArticle)
        res.render('index',{result: dbArticle})
    }).catch(function(err){
        // If an error occurred, send it to the client
        res.json(err)
    })
    
})

// Get article notes
app.get("/articles/:id", function(req, res) {
    // Using the id passed in the id parameter, prepare a query that finds the matching one in our db...
    db.Article.findOne({ _id: req.params.id })
      // ..and populate all of the notes associated with it
      .populate("note")
      .then(function(dbArticle) {
        // If able to successfully find an Article with the given id, send it back to the client
        res.json(dbArticle);
      })
      .catch(function(err) {
        // If an error occurred, send it to the client
        res.json(err);
      });
});
  

// Add notes 
// Route for saving/updating an Article's associated Note
app.post("/articles/:id", function(req, res) {
    // Create a new note and pass the req.body to the entry
    db.Note.create(req.body).then(function(dbNote) {
        // If a Note was created successfully, find one Article with an `_id` equal to `req.params.id`. Update the Article to be associated with the new Note
        // { new: true } tells the query want it to return the updated User -- it returns the original by default
        // Since our mongoose query returns a promise, can chain another `.then` which receives the result of the query
        return db.Article.findOneAndUpdate({ _id: req.params.id }, { note: dbNote._id }, { new: true });
        }).then(function(dbArticle) {
            // If able to successfully update an Article, send it back to the client
            res.json(dbArticle);
        })
        .catch(function(err) {
            // If an error occurred, send it to the client
            res.json(err);
        });
});
  
//
app.listen(PORT, function(){
    console.log("App running on port " + PORT + "!");
});