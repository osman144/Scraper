// scrape script 
// =============
// Axios is a promised-based http library, similar to jQuery's Ajax method
// Automatically transforms as JSON data
const axios = require('axios');
// Require scraping tool
//Cheerio parses markup
const cheerio = require('cheerio');

var scrapeArticles = function () {
    return axios.get('https://www.npr.org/sections/news/').then(function(response){
        // Load onto Cheerio
        let $ = cheerio.load(response.data);

        let articles = [];

        // Grab the title, link, blurb, image 

        $('article').each(function(i,element){
            let title = $(this).children("div.item-info").children("h2.title").text();
            let link = $(this).children("div.item-info").children("h2.title").children("a").attr("href");
            let blurb = $(this).children("div.item-info").children("p.teaser").children("a").text();
            let image = $(this).children("div.item-image").children("div.imagewrap").children("a").children("img").attr("src");

            if(title && link && blurb && image){
                // This section uses regular expressions and the trim function to tidy headlines and summaries
                // Removing extra lines, extra spacing, extra tabs, etc.. to increase to typographical cleanliness.
                let headNeat = title.replace(/(\r\n|\n|\r|\t|\s+)/gm, " ").trim();
                let sumNeat = blurb.replace(/(\r\n|\n|\r|\t|\s+)/gm, " ").trim();

                // Initialize an object, push to the articles array

                var dataToAdd = {
                    title: title,
                    blurb: blurb,
                    link: link,
                    image: image
                };

                articles.push(dataToAdd);
          
            }
        
        });

        return articles

    });
};

// Export the method 

module.exports = scrapeArticles;