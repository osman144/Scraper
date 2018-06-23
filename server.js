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



// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

// Set mongoose to leverage built in JavaScript ES6 Promises
// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI);


//Get route for scraping Reddit NBA website
app.get('/', function(req,res){
    //First grab the body with an HTML request
    axios.get('https://www.reddit.com/r/nba/').then(function(response){
        //Load onto Cheerio

    })
});

app.listen(PORT, function(){
    console.log("App running on port " + PORT + "!");
});