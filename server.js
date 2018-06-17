//=======================================
//===========Node Dependancies===========
//***************************************
const express = require ('express');
const exphbs = require ('express-handlebars');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cheerio = require('cheerio');
const request = require('request');

const PORT = process.env.PORT || 3000;

const app = express();

app.get('/', function(req,res){
    res.send('Hello World!')
});

app.listen(PORT, function(){
    console.log("App running on port " + PORT + "!");
});