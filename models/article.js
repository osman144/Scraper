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

    // blurb:{
    //   type: String,
    // },

    saved:{
      type: Boolean,
      default:false
    },
    // `note` is an object that stores a Note id
    // The ref property links the ObjectId to the Note model
    // This allows us to populate the Article with an associated Note

    // image:{
    //   type: { data: Buffer, contentType: String },
    //   required:true
    // },

    note: {
      type: Schema.Types.ObjectId,
      ref: "Note"
    }
});
  
// This creates our model from the above schema, using mongoose's model method
const Article = mongoose.model("Article", ArticleSchema);
// Export the Article model
module.exports = Article;


