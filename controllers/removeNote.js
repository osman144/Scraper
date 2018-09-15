var db = require('../models');

module.exports = {
    removeAllNotesDB: function(req,res){
        db.Note.remove({}, function(error, response) {
            // Log any errors to the console
            if (error) {
              console.log(error);
              res.send(error);
            }
            else {
              // Otherwise, send the mongojs response to the browser
              // This will fire off the success function of the ajax request
              console.log(response);
              res.send(response);
            }
        });
    },

    removeOneNoteDB: function(req, res) {
        db.Note.remove(
            {
              _id: mongojs.ObjectID(req.params.id)
            },
            function(error, removed) {
              // Log any errors from mongojs
              if (error) {
                console.log(error);
                res.send(error);
            }
              else {
                // Otherwise, send the mongojs response to the browser
                // This will fire off the success function of the ajax request
                console.log(removed);
                res.send(removed);
            }
        });
    }

}