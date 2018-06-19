//=======================================
//===========Node Dependancies===========
//***************************************
const express = require ('express');
const exphbs = require ('express-handlebars');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
// Require scraping tool
const cheerio = require('cheerio');
const request = require('request');

// Require all models
const db = require("./models");


const PORT = process.env.PORT || 3000;

//Initialize app 
const app = express();

// Configure middleware

// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

// Set mongoose to leverage built in JavaScript ES6 Promises
// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI);


app.get('/', function(req,res){
    res.send('Hello World!')
});

app.listen(PORT, function(){
    console.log("App running on port " + PORT + "!");
});