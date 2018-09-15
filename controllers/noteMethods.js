let db = require('../models');

module.exports = {
    // Create a new note 
    create: function(req,res){
        db.Note
        .create(req.body)
        .then(dbNote => res.json(dbNote))
        .catch(err => console.log(err));
    },

    // Find note by id
    find: function(req,res){
        db.Note
        .find({_id: req.params.id})
        .then( dbNote => res.json(dbNote))
        .catch(err => console.log(err));
    },

    // Update note by id
    update: function(req,res){
        db.Note
        .findOneAndUpdate({ _id:req.params.id})
        .then(dbNote => res.json(dbNote))
        .catch(err => console.log(err));
    },

    // Delete one note by id
    removeOneNoteDB: function(req, res) {
        db.Note
        .remove({_id:req.params.id})
        .then(dbNote => res.json(dbNote))
        .catch(err => console.log(err));
    },

    // Delete all notes 
    removeAllNotesDB: function(req,res){
        db.Note
        .remove({})
        .then(dbNote => res.json(dbNote))
        .catch(err => console.log(err));
    },

}