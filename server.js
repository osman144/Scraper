//=======================================
//===========Node Dependancies===========
//***************************************
const express = require ('express');
const exphbs = require ('express-handlebars');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
// Require all models
const db = require("./models");


const PORT = process.env.PORT || 3000;

//Initialize app 
const app = express();

// Require routes
const routes = require("./routes");

// Use express.static to serve the public folder as a static directory
app.use(express.static("public"));


// Connect Handlebars to Express app
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


// Use bodyParser in our app
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Have every request go through route middleware
app.use(routes);

// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

// Set mongoose to leverage built in JavaScript ES6 Promises
// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI);

app.listen(process.env.PORT || 3000, function(){
    console.log("App running on port " + PORT + "!");
});