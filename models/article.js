const mongoose = require('mongoose');

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
    // `title` is required and of type String
    title: {
      type: String,
      required: true
    },
    // `link` is required and of type String
    link: {
      type: String,
      required: true
    },

    blurb:{
      type: String,
    },

    saved:{
      type: Boolean,
      default:false
    },

    // date is just a string
    date: {
      type: Date,
      default: Date.now
    },

    image:{
      type: String,
    },

    note: {
      type: Schema.Types.ObjectId,
      ref: "Note"
    }
});
  
// This creates a model from the above schema, using mongoose's model method
const Article = mongoose.model("Article", ArticleSchema);
// Export the Article model
module.exports = Article;


